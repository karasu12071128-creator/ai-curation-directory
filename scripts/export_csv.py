import sys
import json
import csv

def main():
    # 引数から元データ(JSON)のパスを受け取る
    if len(sys.argv) < 2:
        raise RuntimeError("usage: python export_csv.py <resources.json>")

    src_path = sys.argv[1]

    # JSONを読み込み
    with open(src_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # data はリスト想定。欲しいカラムをCSVに書き出す
    # 想定フィールド: id, source_type, title, short_desc, url, tags, author, stars/downloads, updated_at
    # 無いフィールドがあっても落ちないように get() で拾う
    writer = csv.writer(sys.stdout)
    # ヘッダー行
    writer.writerow([
        "id",
        "source_type",
        "title",
        "short_desc",
        "url",
        "tags",
        "author",
        "stars_or_downloads",
        "updated_at"
    ])

    for item in data:
        writer.writerow([
            item.get("id", ""),
            item.get("source_type", ""),
            item.get("title", ""),
            item.get("short_desc", ""),
            item.get("url", ""),
            # tags は配列かもしれないので文字列に
            ", ".join(item.get("tags", [])) if isinstance(item.get("tags", []), list) else item.get("tags", ""),
            item.get("author", ""),
            item.get("stars/downloads", ""),
            item.get("updated_at", ""),
        ])

if __name__ == "__main__":
    main()