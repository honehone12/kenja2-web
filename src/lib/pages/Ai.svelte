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
        <h1 class="text-secondary font-semibold text-3xl mb-15">
            {#if lang === Lang.Jp}
                ローカルAI画像検索
            {:else}
                Local AI Image Search
            {/if}
        </h1>
        <h2 class="text-xl font-semibold">
            {#if lang === Lang.Jp}
                １００％ブラウザ💻で動作するローカルAI🧠で<br />
                お好きな画像のベクトル検索が可能です
            {:else}
                Vector search is available using your favorite images by<br />
                Local AI🧠 that runs 100% in your browser💻
            {/if}
        </h2>
    </span>
    <div class="hero mt-10">
        <div class="hero-content">
            <div class="alert alert-warning max-w-100">
                <WarnIcon />
                <span class="text-center text-lg">
                    {#if lang === Lang.Jp}
                        現在AndroidとiOSはサポートしていません。期待通りに動作しない可能性があり、著しく非効率で低速です。
                        AndroidとiOSで動作確認をする際はWI-FI環境下にいることを確認してください。
                    {:else}
                        Currently, Android and iOS are not supported. It may not
                        function as expected, resulting in significantly
                        inefficient and slow performance. When testing the
                        application on Android and iOS devices, please ensure
                        you are in a Wi-Fi environment.
                    {/if}
                </span>
                <WarnIcon />
            </div>
        </div>
    </div>
    <div class="hero mt-10">
        <div class="hero-content">
            <a href={lang === Lang.Jp ? "/ai/app?lang=ja" : "/ai/app"}>
                <button class="btn btn-lg btn-accent">
                    {#if lang === Lang.Jp}
                        ローカルAI画像検索へ
                    {:else}
                        Go to Local AI Image Search
                    {/if}
                </button>
            </a>
        </div>
    </div>
    <div class="hero mt-10">
        <div class="hero-content max-w-120">
            <span class="text-lg">
                <p>
                    {#if lang === Lang.Jp}
                        ケンジャニメのAI画像検索ではAIモデルをブラウザで直接動かします。いわゆるエッジAIというやつです。
                        サーバーへ送信するのは推論後のベクトルのみで、画像そのものなどの情報は一切ネットワーク越しに送信しません。
                        <br />
                        <br />
                        そのため、一番最初の起動時にAIモデルのダウンロードを行います。モデルサイズはおおよそ３７０メガバイトで、通常一分ほどで完了します。
                        一度ダウンロードが完了すると二回目以降は必要ありません。
                        <br />
                        <br />
                        （ブラウザのキャッシュが削除されてしまった場合はもう一度ダウンロードが必要になります。）
                        <br />
                        <br />
                        WindowsのChromium系ブラウザではGPUを使用するので非常に高速です。それ以外でも一般的なパソコンならば通常数秒以内に推論が完了します。
                        GPUの対応状況については推論デバイスの表示を確認してください。
                    {:else}
                        Kenjanime's AI image search runs the AI model directly
                        in the browser. This is what's known as edge AI. Only
                        the inferred vectors are sent to the server, no
                        information such as the image itself is sent over the
                        network.
                        <br />
                        <br />
                        For this reason, the AI model will be downloaded the first
                        time you start the app. The model size is approximately 370
                        MB, and it usually takes about a minute to complete. Once
                        the download is complete, it will not be necessary to download
                        it again.
                        <br />
                        <br />
                        (If your browser's cache has been deleted, you will need
                        to download the file again.)
                        <br />
                        <br />
                        Chromium based browsers on Windows use the GPU, making them
                        very fast. Even on other typical PCs, inference usually completes
                        within a few seconds. Please check the displayed inference
                        device information to see the GPU compatibility status.
                    {/if}
                </p>
            </span>
        </div>
    </div>
</main>
