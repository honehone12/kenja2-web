<script lang="ts">
    import { Lang } from "$lib";
    import CommunitySnsCard from "$lib/components/CommunitySnsCard.svelte";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
</script>

<div class="w-full py-20 px-10">
    <div class="flex justify-center">
        <div class="max-w-200">
            <span>
                <h1
                    class="text-center font-semibold text-secondary text-3xl mb-10"
                >
                    {#if lang === Lang.Jp}
                        何ですか、これは？
                    {:else}
                        What is this?
                    {/if}
                </h1>
                <span class="text-lg">
                    {#if lang === Lang.Jp}
                        <p>
                            ケンジャニメは個人で制作しているアニメのファンサイトです。
                            ベクトル検索エンジンを使って、好きなアニメやキャラクターと似たアイテムを探すことができます。
                            <br />
                            ベクトル検索は似たような「感じ」のアニメや、似たような特徴のあるキャラクターを探すのにとても便利です。
                            例えば、青い髪のキャラクターをもっとたくさん知りたいとか、頭身小さめの日常系アニメをもっとたくさん知りたいといった用途に便利です。
                            また、アニメのアートワークをたくさん見ながら、デザインのアイデアをブラッシュアップしていきたいといった用途にも便利です。
                            <br />
                            ケンジャニメではアニメやキャラクターの画像からベクトルを生成し、インデックスを作成することにより、
                            面倒なクエリ不要で、気に入った画像をクリックするだけの簡単操作のレコメンデーションシステムの構築を目指しています。
                        </p>
                        <br />
                        <br />
                        <p>
                            ベクトル検索はAIの進化とともに進化し、とても高精度になっています。<br
                            />
                            しかしベクトルデータの巨大さはなかなか厄介な問題となり得ます。例えば、多くのシステムで利用可能な３２ビット浮動小数点で
                            ベクトルをデータベースに保存した場合、現在一般的な７６８次元で１つあたり３０７２バイトになります。
                            汎用ストレージにとっては大したサイズではありませんが、やはりデータベースに「埋め込み」したいと思うと厄介なサイズなわけです。
                            <br />
                            そこでケンジャニメでは思い切って１バイトに量子化して保存してみることにしました。ベクトルのデータサイズは単純に４分の１の７６８バイトになります。
                            それほどの差は無いように思われるかもしれませんが、同じ予算内で４倍のデータを保存することができると考えると大きな差です。
                            <br />
                            性能の劣化も意識するほどではないようです。少なくともケンジャニメの用途には十分でしょう。
                        </p>
                    {:else}
                        <p>
                            Kenjanime is a anime fan site developed by
                            individual. You can use a vector search engine to
                            find items similar to your favorite anime and
                            characters. <br />
                            Vector search is very useful for finding anime with a
                            similar "vibe" or characters with similar characteristics.
                            For example, it's useful for finding more blue-haired
                            characters, or slice-of-life anime with cartoon like
                            character design. It's also useful for looking at lots
                            of anime artwork to refine your design ideas. <br />
                            Kenjanime generated vectors from anime and character
                            images and created an index aiming to build an easy-to-use
                            recommendation system that allows users to simply click
                            on images they like, without the need for complicated
                            queries.
                        </p>
                        <br />
                        <br />
                        <p>
                            Vector search has evolved alongside AI advances,
                            becoming highly accurate. <br />
                            However, the large size of vector data can be quite a
                            problem. For example, if a vector is stored in a database
                            using the 32-bit floating-point format available on many
                            systems, it would take up 3,072 bytes per vector with
                            the currently common 768 dimensions. While this isn't
                            a significant size for general-purpose storage, it still
                            becomes a problem when attempting to "embed" it in a
                            database. <br />
                            So, with Kenjanime, I decided to quantize it to 1 byte
                            and store it. The vector data size is simply one-fourth
                            the size, at 768 bytes. While this may not seem like
                            a significant difference, it makes a significant difference
                            when you consider that you can store four times as much
                            data within the same budget. <br />
                            The performance regression doesn't seem to be noticeable,
                            either. At least, it should be sufficient for Kenjanime's
                            purposes.
                        </p>
                    {/if}
                </span>
            </span>
            <span>
                <h2
                    class="text-center text-secondary font-semibold text-3xl mt-20 mb-10"
                >
                    {#if lang === Lang.Jp}
                        ケンジャ二メはAIですか？
                    {:else}
                        Is Kenjanime AI?
                    {/if}
                </h2>
                <span class="text-lg">
                    {#if lang === Lang.Jp}
                        <p>
                            半分「はい」でしょうか。
                            <br />
                            確かにケンジャニメのベクトルは全てAIで作成されています。ただし、ベクトルはすべて事前に計算されていますので、実行時には決定論的に動作します。
                            <br />
                            それにしてもAIはケンジャニメのコアテクノロジーと言って良いでしょう。
                            言語に関係なくグローバルに一意となる画像のベクトル検索は、まさにAIの進化によって可能となった素晴らしい技術に違いありません。
                        </p>
                    {:else}
                        <p>
                            Yes, half.
                            <br />
                            Certainly all of Kenjanime's vectors are created using
                            AI. However, because all vectors are pre-computed, they
                            behave deterministically at runtime.
                            <br />
                            Even so, it can be said that AI is Kenjanime's core technology.
                            Vector search for images that is globally unique regardless
                            of language is undoubtedly an incredible technology made
                            possible by advances in AI.
                            <br />
                        </p>
                    {/if}
                </span>
            </span>
            <span>
                <h2
                    class="text-center text-secondary font-semibold text-3xl mt-20 mb-10"
                >
                    {#if lang === Lang.Jp}
                        あなたは誰？
                    {:else}
                        Who are you?
                    {/if}
                </h2>
                <span class="text-lg">
                    {#if lang === Lang.Jp}
                        <p>
                            東京の秋葉原から電車で４５分ほどの街に住んでます。こんにちは。
                        </p>
                        <a
                            href="/textsearch/buffer?keyword=%E6%99%AE%E9%80%9A%E3%81%AE%E5%A5%B3%E5%AD%90%E6%A0%A1%E7%94%9F%E3%81%8C%E3%80%90%E3%82%8D%E3%81%93%E3%81%A9%E3%82%8B%E3%80%91%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F%E3%80%82&item-type=all&lang=ja"
                            class="link link-primary"
                        >
                            ところで私の地元にもアニメがありますので紹介したい。
                        </a>
                        <p>
                            別に聖地としてポピュラーではありませんし、地元を宣伝するつもりもありませんが、アニメは面白いのでぜひ見てね。
                        </p>
                    {:else}
                        <p>
                            I'm living in a japanese town where is about 45
                            minutes by train from Akihabara station of Tokyo.
                            Hello.
                        </p>
                        <a
                            href="/textsearch/buffer?keyword=Futsuu%20no%20Joshikousei%20ga%20[Locodol]%20Yattemita.&item-type=all"
                            class="link link-primary"
                        >
                            By the way, there is an anime in my hometown, so I
                            would like to introduce it to you.
                        </a>
                        <p>
                            It's not particularly popular as a seichi (聖地
                            anime's place in real), and I don't intend to
                            promote my hometown, but the anime is good, so I
                            recommend you check it out.
                        </p>
                    {/if}
                </span>
                <div class="flex justify-center text-center mt-5">
                    <a
                        href="/vectorsearch/buffer/68afc67679d87884b805020f?item-type=anime{lang ===
                        Lang.Jp
                            ? '&lang=ja'
                            : ''}"
                    >
                        <img
                            src="/preview/anime/9e1f6c08772d5a7b3d62a083a643f87d.jpg"
                            alt={lang === Lang.Jp
                                ? "アニメ「普通の女子高生が【ろこどる】やってみた。」"
                                : 'Anime Named "Futsuu no Joshikousei ga [Locodol] Yattemita."'}
                        />
                        <p class="link-primary">
                            {#if lang === Lang.Jp}
                                画像をクリックして類似検索
                            {:else}
                                Click Image to Similarity Search
                            {/if}
                        </p>
                    </a>
                </div>
            </span>
            <span>
                <h2
                    class="text-center text-secondary font-semibold text-3xl mt-20 mb-10"
                >
                    {#if lang === Lang.Jp}
                        なんでこんなものが？
                    {:else}
                        Why is this exist?
                    {/if}
                </h2>
                <span class="text-lg">
                    {#if lang === Lang.Jp}
                        <p>
                            アニメを探す簡単なツールが欲しかったからです。<br />
                            ストリーミングプラットフォームでアニメをたくさん見みていると、おすすめに表示されるアニメはすでに見たタイトルか新作タイトルばかりになってしまいます。
                            それはレコメンデーションシステムの自然な性質だとは思いますが、多くの場合パーソナライズされているので、永遠にそのまま大した変化がないままなのです。
                            <br />
                            するとアニメを探すのは総当りになってしまいます。実際にやりましたとも。AからZまでリストを全部見て、気になるタイトルを探しました。
                            最初のうちは楽しいのですが、だんだん辛くなってきますし、実際には何度もやるはめになります。「気分」は毎週のように変わるからです。
                        </p>
                        <br />
                        <br />
                        <p>
                            二番目の理由としては、レヴューや視聴履歴とつながったレコメンデーションシステムとは独立したものを作りたかったというのがあります。
                            レヴューを読むのは楽しいですが、そのタイトルを見る前に読みたくないときもあります。タイトルの視聴中にレヴューを読んじゃって悲しい思いをするときもあるでしょう。
                            「え？これ低評価なの？面白いと思ったのワタスだけ？」みたいな。
                            <br />
                            それに、おすすめが表示されていると皆同じタイトルばかりを見る傾向があります。
                            それもまた楽しいのも違いないのですが、過去の名作を「掘りたい」ときもありますし、それは皆さんも一緒だと信じています。
                        </p>
                        <br />
                        <br />
                        <p>
                            要するに、ストリーミングプラットフォームやショッピングサイトにあるようなレコメンデーションシステムを、アニメを探すためだけに、
                            能動的に使ってやるようなウェブサイトが欲しいと思ったわけです。あえて言うなら、意図の存在しないレコメンデーションシステムとか、
                            手段が目的となったレコメンデーションシステムと言えるでしょう。
                            <br />
                            そして本当に、ケンジャニメはストリーミングプラットフォームのレコメンデーションシステムだけを切り取ってウェブサイトにしたような格好ですが、
                            パーソナライズされませんし、閲覧履歴を収集しません。よってログインも不要になりました。
                        </p>
                    {:else}
                        <p>
                            I wanted an easy tool to find anime. <br />
                            If you watch a lot of anime on streaming platforms, the
                            recommendations you get will either be titles you've
                            already seen or new releases. I suppose that's the nature
                            of recommendation systems, but because they're often
                            personalized, they stay the same forever. <br />
                            This means finding anime becomes a brute force process.
                            I've done it before: I've gone through lists from A to
                            Z, searching for titles that touch me. It's fun at first,
                            but it gets pain, and you end up doing it multiple times
                            because your "mood" changes every week.
                        </p>
                        <br />
                        <br />
                        <p>
                            The second reason is that I wanted to create
                            something independent of recommendation systems that
                            are linked to reviews and viewing history. Reading
                            reviews is fun, but sometimes you don't want to read
                            them before watching a title. You might also end up
                            reading a review while watching a title and feel
                            sad. Like, "Huh? This one has a low rating? Am I the
                            only one who thought it was good?" <br />
                            Also, when recommendations are displayed, everyone tends
                            to watch the same titles over and over. That can be fun,
                            of course, but there are times when you want to "dig
                            up" old classics, and I believe that's true for everyone.
                        </p>
                        <br />
                        <br />
                        <p>
                            In short, I wanted a website that would let users
                            actively use a recommendation system like those
                            found on streaming platforms and shopping sites,
                            only just to find anime. If I had to describe it, it
                            would be a recommendation system without any
                            intention, or a recommendation system where the
                            means have become the end. <br />
                            And really, Kenjanime is like a streaming platform's
                            recommendation system taken and turned into a website,
                            but it's not personalized, and it doesn't collect browsing
                            history. So, there's no need to log in.
                        </p>
                    {/if}
                </span>
            </span>
            <span>
                <h2
                    class="text-center text-secondary font-semibold text-3xl mt-20 mb-10"
                >
                    {#if lang === Lang.Jp}
                        なぜそんなにアニメの検索にこだわるのですか？
                    {:else}
                        Why are you so hung up on searching anime?
                    {/if}
                </h2>
                <span class="text-lg">
                    {#if lang === Lang.Jp}
                        <p>
                            昔、某動画投稿サイトに動画を作って投稿していたことがあります。ギャグ系の。自分ではオリジナルだと思っていたギャグでも、
                            先輩諸氏に「これはあのアニメのあのシーンっぽいね」と言われても自分ではなんのことだかさっぱりわからず、「え？あ.....。」みたいな感じになっちゃって残念な思いをしたことがあります。<br
                            />
                            まあどうでもいいんですけど、「そのアニメは知りません。」で終わってしまうと悲しいと思っています。「あー！名前は知ってますがまだ見てません。〇〇っぽいアニメですよね？」
                            くらい言えれば先輩諸氏も喜んでベラベラ説明してくれたことでしょう。まあどうでもいいんですけど。
                        </p>
                    {:else}
                        <p>
                            A long time ago, I used to make and post videos on a
                            certain video sharing site. They were comedy-themed.
                            Even though I thought my gags were original, when my
                            senpai (先輩 seniors) would say, "This sounds like
                            that scene from that anime.", I had no idea what
                            they were talking about, and I'd end up like, "Huh?
                            Ah...." and feel sad. <br />
                            Well, it doesn't really matter, but I think it's sad
                            when we end up saying, "I don't know that anime.". If
                            I could just say, "Ah! I know the name, but I haven't
                            seen it yet. It's an anime similar to XX, right?", I'm
                            sure my senpai would be happy to explain it to me in
                            detail. Well, it doesn't really matter.
                        </p>
                    {/if}
                </span>
            </span>
            <span>
                <h2
                    class="text-center text-secondary font-semibold text-3xl mt-20 mb-10"
                >
                    {#if lang === Lang.Jp}
                        ソーシャルメディアはありますか？
                    {:else}
                        Do you have social media?
                    {/if}
                </h2>
                <CommunitySnsCard />
            </span>
            <span>
                <span class="text-center text-secondary text-xl">
                    <h2 class="mt-30">
                        {#if lang === Lang.Jp}
                            どうぞよろしくお願いします。
                        {:else}
                            Thank you for your understanding.
                        {/if}
                    </h2>
                </span>
            </span>
        </div>
    </div>
</div>
