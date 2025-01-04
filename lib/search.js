// 検索機能を実装する
document.addEventListener("DOMContentLoaded", () => {
    // ダミーのデータ（実際にはAPIやデータベースと連携可能）
    const articles = [
        { title: "article 1", content: "東北大学" },
        { title: "article 2", content: "ggtree" },
    ];

    // 検索結果を表示するためのエリアを作成
    const mainElement = document.querySelector("main");
    const resultsElement = document.createElement("div");
    resultsElement.id = "results";
    mainElement.appendChild(resultsElement);

    // 検索フォームの作成
//    const searchForm = document.createElement("form");
//    searchForm.id = "search-form";
//    searchForm.innerHTML = `
//        <input type="search" id="search-box" placeholder="キーワードを入力してください">
//        <button type="submit">検索</button>
//    `;
//    mainElement.prepend(searchForm);

    // 検索イベントを処理
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault(); // ページリロードを防止

        const query = document.getElementById("search-box").value.trim().toLowerCase(); // 入力内容を取得
        resultsElement.innerHTML = ""; // 結果エリアをクリア

        if (query === "") {
            resultsElement.innerHTML = "<p>キーワードを入力してください。</p>";
            return;
        }

        // 検索処理
        const filteredArticles = articles.filter(
            (article) =>
                article.title.toLowerCase().includes(query) ||
                article.content.toLowerCase().includes(query)
        );

        // 結果の表示
        if (filteredArticles.length > 0) {
            filteredArticles.forEach((article) => {
                const articleElement = document.createElement("div");
                articleElement.className = "article";
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.content}</p>
                `;
                resultsElement.appendChild(articleElement);
            });
        } else {
            resultsElement.innerHTML = "<p>該当する記事が見つかりませんでした。</p>";
        }
    });
});
