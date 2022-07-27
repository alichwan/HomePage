<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import Home from './components/Home.svelte';
	import DataScientistTab from './components/DataScientistTab.svelte';
	import DeveloperTab from './components/DeveloperTab.svelte';
	import ProjectsTab from './components/ProjectsTab.svelte';

	// Tabs
	let items = ['Inicio','Ciencia de Datos', 'Desarrollo', 'Proyectos'];
	let activeItem = 'Inicio';
	const tabChange = (e) => {
		activeItem = e.detail;
	}

</script>

<Header/>
	<main>
		<Tabs {activeItem} {items} on:tabChange={tabChange}/>
		{#if activeItem == 'Inicio'}
			<Home/>
		{:else if activeItem === 'Ciencia de Datos'}
			<DataScientistTab />
		{:else if activeItem === 'Desarrollo'}
			<DeveloperTab />
			{:else if activeItem === 'Proyectos'}
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
