<script lang="ts">
    import { page } from "$app/state";
    import { Lang } from "$lib";

	interface Props {
		lang: Lang;
	}

	let {lang}: Props = $props();

	function otherLang() {
		return lang === Lang.Jp ? 'EN' : 'JP';
	}

	function otherLangUrl() {
		const u = page.url;
		let q = u.searchParams;
		let l = lang === Lang.Jp ? 'en' : 'ja';
		if (q.has('lang')) {
			q.set('lang', l);
		} else {
			q.append('lang', l);
		}
		return u.toString();
	}
</script>

<div class="navbar bg-base-200">
	<div class="navbar-start">
		<div class="dropdown md:hidden">
			<div tabindex="0" role="button" class="btn btn-ghost">
				<svg xmlns="http://www.w3.org/2000/svg" class="size-9" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6 h16 M4 12 h16 m-16 6 h16"/></svg>
			</div>
			<ul class="menu menu-lg dropdown-content bg-base-300 rounded-box z-1 w-52 mt-4 p-3">
				<li class="my-2">
					<a tabindex="0" href="/">
						<span class="link font-medium">Home</span>
					</a>
				</li>
				<li class="my-2">
					<a tabindex="0" href="/about">
						<span class="link font-medium">About</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="navbar-center hidden md:flex">
		<ul class="menu menu-lg menu-horizontal px-1">
			<li>
				<a tabindex="0" href="/"><span class="font-medium">Home</span></a>
			</li>
			<li>
				<a tabindex="0" href="/about"><span class="font-medium">About</span></a>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<ul class="menu menu-lg menu-horizontal px-1 mr-4">
			<li>
				<a 
					tabindex="0" 
					href={otherLangUrl()} 
					onclick={(e) => {
                        e.preventDefault();
                        window.location.href = otherLangUrl();
                    }}
				><span class="font-medium">{otherLang()}</span></a>
			</li>
		</ul>
	</div>
</div>
