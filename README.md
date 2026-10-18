# ovraxel.github.io

Hexo 網站，透過 GitHub Actions 自動部署到 GitHub Pages。

## 第一次部署

1. 把這個資料夾的**全部內容**放到 repo `ovraxel/ovraxel.github.io` 的根目錄（`package.json` 要在根目錄，不要多包一層資料夾）。
   舊檔案請先刪除，包含舊的 `.github/workflows/` 裡的 workflow，避免重複觸發。
2. 到 GitHub：**Settings → Pages → Build and deployment → Source**，選 **GitHub Actions**。
3. commit 並 push 到 `main`：

   ```bash
   git add -A
   git commit -m "Redeploy Hexo site"
   git push origin main
   ```

4. 到 **Actions** 分頁確認 `Hexo Pages` 執行成功，網址為 https://ovraxel.github.io

## 日常使用

```bash
npm install            # 第一次或依賴變更後
npx hexo new "標題"    # 新增文章
npx hexo server        # 本機預覽 http://localhost:4000
```

寫完 commit 並 push 到 `main` 即自動部署。

## 注意事項

- 建議在本機執行一次 `npm install`，把產生的 `package-lock.json` 一起 commit。有 lock file 時 workflow 會用 `npm ci`（可重現的安裝），沒有時會自動退回 `npm install`，兩種情況都能部署。
- `package.json` 必須同時有 `hexo` 依賴與 `"hexo": { "version": ... }` 欄位，否則 Hexo 不會把資料夾視為專案。
- `node_modules/`、`public/`、`db.json` 已在 `.gitignore`，不要 commit。
- 主題為 Butterfly（npm 套件 `hexo-theme-butterfly`，需搭配 `hexo-renderer-pug` 與 `hexo-renderer-stylus`，已列入 `package.json`）。主題設定寫在根目錄的 `_config.butterfly.yml`，只需放想覆蓋的項目，完整選項請參考 Butterfly 官方文件。
- 若改用其他主題：以 npm 或 submodule 安裝，並修改 `_config.yml` 的 `theme`。
- 若網站不是放在網域根目錄（例如專案頁面 `user.github.io/repo/`），要把 `_config.yml` 的 `url` 與 `root` 改成對應值。
# ovraxel.github.io

Hexo 網站，透過 GitHub Actions 自動部署到 GitHub Pages。

## 第一次部署

1. 把這個資料夾的**全部內容**放到 repo `ovraxel/ovraxel.github.io` 的根目錄（`package.json` 要在根目錄，不要多包一層資料夾）。
   舊檔案請先刪除，包含舊的 `.github/workflows/` 裡的 workflow，避免重複觸發。
2. 到 GitHub：**Settings → Pages → Build and deployment → Source**，選 **GitHub Actions**。
3. commit 並 push 到 `main`：

   ```bash
   git add -A
   git commit -m "Redeploy Hexo site"
   git push origin main
   ```

4. 到 **Actions** 分頁確認 `Hexo Pages` 執行成功，網址為 https://ovraxel.github.io

## 日常使用

```bash
npm install            # 第一次或依賴變更後
npx hexo new "標題"    # 新增文章
npx hexo server        # 本機預覽 http://localhost:4000
```

寫完 commit 並 push 到 `main` 即自動部署。

## 注意事項

- 建議在本機執行一次 `npm install`，把產生的 `package-lock.json` 一起 commit。有 lock file 時 workflow 會用 `npm ci`（可重現的安裝），沒有時會自動退回 `npm install`，兩種情況都能部署。
- `package.json` 必須同時有 `hexo` 依賴與 `"hexo": { "version": ... }` 欄位，否則 Hexo 不會把資料夾視為專案。
- `node_modules/`、`public/`、`db.json` 已在 `.gitignore`，不要 commit。
- 主題為 Butterfly（npm 套件 `hexo-theme-butterfly`，需搭配 `hexo-renderer-pug` 與 `hexo-renderer-stylus`，已列入 `package.json`）。主題設定寫在根目錄的 `_config.butterfly.yml`，只需放想覆蓋的項目，完整選項請參考 Butterfly 官方文件。
- 若改用其他主題：以 npm 或 submodule 安裝，並修改 `_config.yml` 的 `theme`。
- 若網站不是放在網域根目錄（例如專案頁面 `user.github.io/repo/`），要把 `_config.yml` 的 `url` 與 `root` 改成對應值。
