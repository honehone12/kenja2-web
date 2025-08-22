<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang
    }

    let {lang}: Props = $props();
</script>

<div class="w-full py-20 px-10">
    <div class="text-center mb-20">
        {#if lang === Lang.Jp}
            <a href="/about?lang=en" onclick={(e) => {
                e.preventDefault();
                window.location.href = '/about?lang=en';
            }}>
                <p class="link link-primary mt-5">Do you prefer English?</p>
            </a>
        {:else}
            <a href="/about?lang=ja" onclick={(e) => {
                e.preventDefault();
                window.location.href = '/about?lang=ja';
            }}>
                <p class="link link-primary mt-2">日本語対応しました</p>
            </a>
        {/if}
    </div>
    <div class="flex justify-center">
        <div class="max-w-200">
            {#if lang === Lang.Jp}
                <h1 class="text-center text-info text-3xl mb-20">何ですか、これは？</h1>
                <span class="text-lg">
                    <p>
                        ケンジャは個人で制作しているアニメのファンサイトです。<br>
                        ベクターサーチエンジンを使って好きなアニメやキャラクターと似たアイテムを探すことができます。
                        ベクターサーチは似たような「感じ」のアニメや、似たような特徴のあるキャラクターを探すのに便利です。
                        例えば、最初にテキストサーチで「綾波 レイ」と検索すれば、次にベクターサーチで青髪のキャラクターを探すことができます。
                    </p>
                </span>
            {:else}
                <h1 class="text-center text-info text-3xl mb-20">What is this?</h1>
                <span class="text-lg">
                    <p>
                        Kenja is a fan site for anime being developed by individual.<br>
                        You can search similar items with your favorite anime or characters by using vector search engine. 
                        Vector search is useful for searching animes with similar "vibes", or searching chracters with similar features.
                        For example, once you found "Rei Ayanami" with text search, then you can find characters with "blue hair" with vecotr search.   
                    </p>
                </span>
            {/if}
            {#if lang === Lang.Jp} 
                <h2 class="text-center text-info text-3xl mt-20 mb-20">あなたは誰?</h2>
                <span class="text-lg">
                    <p>東京の秋葉原から電車で４５分ほどの街に住んでるプログラマーです。</p>
                    <a href="/textsearch/buffer?keyword=普通の女子校生が【ろこどる】やってみた。&item-type=all" class="link link-primary">
                        ところで私の地元にもアニメがあります。
                    </a>
                    <p>別に聖地としてポピュラーではありませんが。</p>
                </span>
            {:else}
                <h2 class="text-center text-info text-3xl mt-20 mb-20">Who are you?</h2>
                <span class="text-lg">
                    <p>I'm a programmer living in a japanese town where is about 45 minutes by train from Akihabara station of Tokyo.</p>
                    <a href="/textsearch/buffer?keyword=Futsuu%20no%20Joshikousei%20ga%20[Locodol]%20Yattemita.&item-type=all" class="link link-primary">
                        By the way, actually my town have a anime.
                    </a>
                    <p>Although it is not popular as "seichi" (聖地 anime's real location).</p>
                </span>
            {/if}
            {#if lang === Lang.Jp}
                <h2 class="text-center text-info text-3xl mt-20 mb-20">なんでこんなものが？</h2>
                <span class="text-lg">
                    <p>
                        アニメを探す簡単なツールが欲しかったからです。<br>
                        ストリーミングプラットフォームでアニメをたくさん見ると、おすすめに表示されるアニメはすでに見たタイトルばかりになってしまいます。
                        それはレコメンデーションシステムの自然な性質だと思います。<br>
                        するとアニメを探すのは総当りになってしまいます。実際にやりましたとも、AからZまで。
                        最初のうちは楽しいのですが、実際には何度もやるはめになります。「気分」は毎週変わるからです。
                    </p>
                    <br>
                    <br>
                    <p>
                        二番目の理由としては、レヴューや視聴履歴とつながったレコメンデーションシステムとは独立したものを作りたかったというのがあります。
                        レヴューを読むのは楽しいです。しかしそのタイトルを見る前に読みたくないときもあります。<br> 
                        それに、おすすめが表示されていると皆同じタイトルばかりを見る傾向があります。
                        それもまた楽しいものです。しかし過去の名作を「掘りたい」ときもありますし、それは皆さんも一緒だと信じています。
                    </p>
                </span>
            {:else}
                <h2 class="text-center text-info text-3xl mt-20 mb-20">Why is this exist?</h2>
                <span class="text-lg">
                    <p>
                        Because I just wanted a easy tool for searching animes.<br>
                        Once you watched a lot of animes on video streaming paltform, their recommendation systems become full of titles that you already watched.
                        I think it's the nature of recommendation systems.<br>
                        Then, searching anime have to be "brute force". I did, from A to Z. 
                        It might be fun for the first and last time, but actually you have to do for several times. Because our "mood" varies for weeks.
                    </p>
                    <br>
                    <br>
                    <p>
                        Second reason is that I wanted to create search engine independent from reviews nor recommendation systems tied with our watching anime history.
                        Reading reviews is fun. But I sometimes don't wanted to read them before watching the title.<br> 
                        In addition, we tend to watch same new titles when recommendation system is on.
                        It's fun. But I sometimes want to "dig" legacy animes and believe that you too.
                    </p>
                </span>
            {/if}
            {#if lang === Lang.Jp}
                <h2 class="text-center text-info text-3xl mt-20 mb-20">ケンジャの由来は何ですか？</h2>
                <span class="text-lg">
                    <p>
                        「賢者タイム」からとりました。
                    </p>
                </span>
            {:else}
                <h2 class="text-center text-info text-3xl mt-20 mb-20">What does kenja mean?</h2>
                <span class="text-lg">
                    <p>
                        Kenja (賢者) means wise person or philosopher. I took the word from "kenja time" (賢者 タイム).
                    </p>
                </span>
            {/if}
            {#if lang === Lang.Jp}
                <h2 class="text-center text-info text-3xl mt-20 mb-20">ソーシャルメディアはありますか？</h2>
                <span class="text-lg">
                    <p>
                        準備中です。
                    </p>
                </span>
            {:else}
                <h2 class="text-center text-info text-3xl mt-20 mb-20">Do you have social media?</h2>
                <span class="text-lg">
                    <p>
                        I'm preparing it.
                    </p>
                </span>
            {/if}
            {#if lang === Lang.Jp}
                <span class="text-center text-info text-xl">
                    <h2 class="mt-30">どうぞよろしくお願いします。</h2>
                </span>
            {:else}
                <span class="text-center text-info text-xl">
                    <h2 class="mt-30">Thank you for your understanding.</h2>
                </span>
            {/if} 
        </div>
    </div>
</div>
