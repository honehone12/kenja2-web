<script lang="ts">
    import { Lang } from "$lib";

    interface Props {
        lang: Lang;
    }

    let { lang }: Props = $props();
</script>

<label for="file-file">
    <h2 class="text-2xl">
        {lang === Lang.Jp
            ? "画像ファイルを選択してください"
            : "Please Select a Image File"}
    </h2>
    <p class="text-lg mt-5">
        {lang === Lang.Jp ? "対応ファイル: jpeg" : "Supported file type: jpeg"}
    </p>
</label>
<input
    required
    id="file-file"
    name="file"
    type="file"
    accept="image/jpeg"
    class="file-input file-input-accent mt-5 w-80 md:w-120"
/>
