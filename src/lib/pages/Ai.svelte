<script lang="ts">
    import { Lang } from "$lib";
    import WarnIcon from "$lib/components/WarnIcon.svelte";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
</script>

<main class="w-full min-h-screen py-20 px-10">
    <span class="text-center">
        <h1 class="text-secondary font-semibold text-3xl mb-10">
            {#if lang === Lang.Jp}
                AI画像検索
            {:else}
                AI Image Search
            {/if}
        </h1>
        <h2 class="text-xl font-semibold mb-10">
            {#if lang === Lang.Jp}
                １００％ブラウザ💻で動作するローカルAI🧠で<br />
                お好きな画像のベクトル検索が可能です
            {:else}
                Vector search is available using your favorite images by<br />
                Local AI🧠 that runs 100% in your browser💻
            {/if}
        </h2>
    </span>
    <div class="hero text-center">
        <div class="hero-content max-w-100">
            <p>
                {#if lang === Lang.Jp}
                    ケンジャニメのAI画像検索ではAIモデルをブラウザで直接動かします。サーバーへ送信するのは推論後のベクトルのみで、画像そのものなどの情報は一切ネットワーク越しに送信しません。
                    <br />
                    <br />
                    その為、一番最初の起動時にAIモデルのダウンロードを行います。モデルサイズはおおよそ３７０メガバイトで、通常一分ほどで完了します。一度ダウンロードが完了すると二回目以降は必要ありません。
                    （ブラウザのキャッシュが削除された場合はもう一度ダウンロードが必要になります。）
                {:else}
                    Kenjanime's AI image search runs the AI model directly in
                    the browser. Only the inferred vectors are sent to the
                    server, no information such as the image itself is sent over
                    the network.
                    <br />
                    <br />
                    For this reason, the AI model will be downloaded the first time
                    you start the app. The model size is approximately 370 MB, and
                    it usually takes about a minute to complete. Once the download
                    is complete, it will not be necessary to download it again. (If
                    your browser cache is cleared, you will need to download it again.)
                {/if}
            </p>
        </div>
    </div>
    <div class="hero mt-5">
        <div class="hero-content">
            <div class="alert alert-warning text-center max-w-100">
                <WarnIcon />
                {#if lang === Lang.Jp}
                    スマートフォンなどをお使いで通信量を気にされる方は、一度WI-FI環境でダウンロードを完了してからお使いください。
                {:else}
                    If you are using a smartphone or other device and are
                    concerned about data usage, please complete the download in
                    a Wi-Fi environment before using the app.
                {/if}
                <WarnIcon />
            </div>
        </div>
    </div>
    <div class="hero mt-10">
        <div class="hero-content">
            <a href={lang === Lang.Jp ? "/ai/app?lang=ja" : "/ai/app"}>
                <button class="btn btn-lg btn-accent w-40"> OK </button>
            </a>
        </div>
    </div>
</main>
