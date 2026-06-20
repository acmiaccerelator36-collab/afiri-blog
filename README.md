# スマホの正直話 - セットアップ手順

## フォルダ構成

```
blog/
├── _config.yml         # サイト設定
├── _layouts/           # レイアウトテンプレート
│   ├── default.html
│   ├── post.html
│   └── page.html
├── _posts/             # ブログ記事（ここに追加していく）
│   └── 2026-01-15-docomo-mnp.md
├── pages/              # 固定ページ
│   ├── sim-hikaku.md   # 格安SIM比較（メイン成約記事）
│   ├── hikari-hikaku.md # 光回線比較
│   ├── profile.md      # プロフィール
│   ├── privacy.md      # プライバシーポリシー
│   └── contact.md      # お問い合わせ
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── index.html          # トップページ
└── Gemfile
```

---

## GitHub Pagesで公開する手順

### 1. GitHubリポジトリを作成

1. GitHubにログイン
2. 新しいリポジトリを作成
   - リポジトリ名：`blog`（任意）
   - Public に設定
3. このフォルダの中身をすべてアップロード

### 2. GitHub Pagesを有効化

1. リポジトリの「Settings」→「Pages」
2. Source を「Deploy from a branch」に設定
3. Branch を「main」「/(root)」に設定
4. 数分後に `https://ユーザー名.github.io/リポジトリ名/` で公開される

### 3. 独自ドメインを設定する場合（後で）

1. ドメインを取得（お名前.com・Xserver Domainなど）
2. ドメインのDNS設定でGitHub PagesのIPアドレスを設定
3. GitHubのSettings→PagesにCustom domainを入力

---

## 記事の追加方法

`_posts/` フォルダに以下の形式でファイルを作成するだけ。

**ファイル名の形式：** `YYYY-MM-DD-記事のスラッグ.md`

例：`2026-02-01-rakuten-mobile-review.md`

**ファイルの先頭に必ず書くこと（Front Matter）：**

```yaml
---
layout: post
title: "記事タイトル"
description: "記事の説明（検索結果に表示される）"
date: 2026-02-01
category: 格安SIM
---

ここから本文を書く（Markdown形式）
```

---

## アフィリエイトリンクの追加（ASP審査通過後）

各記事の `<!-- アフィリエイトリンクをここに追加 -->` の部分を以下に差し替える。

```html
<a href="ASPから取得したリンクURL" class="affiliate-btn" target="_blank" rel="noopener nofollow">
  楽天モバイルの公式サイトで詳細を見る
  <small>※アフィリエイトリンクを含みます</small>
</a>
```

---

## カスタマイズしておくべき箇所

- `_config.yml` → `twitter_username`、`tiktok_url`、`google_analytics` を埋める
- `pages/profile.md` → 販売歴の年数、実体験を追記する
- `pages/contact.md` → Googleフォームを作成してiframeを埋め込む
