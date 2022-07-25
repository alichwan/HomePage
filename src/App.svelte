<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import Home from './components/Home.svelte';
	import DataScientistTab from './components/DataScientistTab.svelte';
	import DeveloperTab from './components/DeveloperTab.svelte';
	import ProjectsTab from './components/ProjectsTab.svelte';

	// Tabs
	let items = ['Home','Data Scientist', 'Developer', 'Projects'];
	let activeItem = 'Home';
	const tabChange = (e) => {
		activeItem = e.detail;
	}

</script>

<Header/>
	<main>
		<Tabs {activeItem} {items} on:tabChange={tabChange}/>
		{#if activeItem == 'Home'}
			<Home/>
		{:else if activeItem === 'Data Scientist'}
			<DataScientistTab />
		{:else if activeItem === 'Developer'}
			<DeveloperTab />
			{:else if activeItem === 'Projects'}
			<ProjectsTab />
		{/if}
	</main>
<Footer/>

<style>
	main{
		max-width: 80%;
		margin: 40px auto;
	}
</style> 
