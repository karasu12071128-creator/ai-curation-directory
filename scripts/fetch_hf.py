#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Hugging Face から人気モデルを取得して JSON で標準出力に出す。
使い方:
  python scripts/fetch_hf.py > hf.json
"""

import os
import sys
import time
import json
import math
import requests
from typing import List, Dict

HF_API = "https://huggingface.co/api/models"

# 収集件数（多すぎると重くなるので最初は控えめ）
TOTAL_LIMIT = int(os.getenv("HF_TOTAL_LIMIT", "300"))
PER_PAGE = 100

def fetch_page(page: int) -> List[Dict]:
    params = {
        "sort": "downloads",          # ダウンロード数順
        "direction": -1,
        "limit": PER_PAGE,
        "full": "true",
        "p": page,
    }
    r = requests.get(HF_API, params=params, timeout=30)
    r.raise_for_status()
    return r.json()

def to_item(m: Dict) -> Dict:
    # 安全にキーを取りだす
    downloads = m.get("downloads") or 0
    cardData = m.get("cardData") or {}
    author = m.get("author") or (m.get("pipeline_tag") or "")
    license_ = (cardData.get("license") or m.get("license") or "")
    tags = m.get("tags") or []
    updated = m.get("lastModified") or m.get("lastModifiedDate") or ""

    return {
        "id": f"hf_{m.get('id')}",
        "source_type": "hf_model",
        "title": m.get("modelId") or m.get("id") or "",
        "short_desc": (cardData.get("language") or cardData.get("pipeline_tag") or "")[:200],
        "url": f"https://huggingface.co/{m.get('id')}",
        "tags": tags,
        "author": author,
        "stars/downloads": int(downloads),
        "license": license_,
        "updated_at": updated,
        "category": m.get("pipeline_tag") or "",
    }

def main():
    out: List[Dict] = []
    page = 0
    while len(out) < TOTAL_LIMIT:
        data = fetch_page(page)
        if not data:
            break
        for m in data:
            out.append(to_item(m))
            if len(out) >= TOTAL_LIMIT:
                break
        page += 1
        # ちょい休憩（API優しめ）
        time.sleep(0.3)

    # JSON を標準出力へ
    json.dump(out, sys.stdout, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()