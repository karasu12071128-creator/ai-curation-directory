import json
import sys

# 使い方:
#   python scripts/make_diff.py data/resources.json > data/diff.json
#
# 上のコマンドは workflow から呼ばれています。
# ここではとりあえず差分ではなく、最新リストをそのまま出力します。

def main():
    if len(sys.argv) < 2:
        raise SystemExit("Usage: python make_diff.py <resources.json>")

    src_path = sys.argv[1]

    # resources.json を読み込む
    with open(src_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # そのまま標準出力に吐き出す（> data/diff.json で保存される）
    json.dump(data, sys.stdout, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()