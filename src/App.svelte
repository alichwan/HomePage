<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import DataScientistTab from './components/DataScientistTab.svelte';
	import DevTab from './components/DevTab.svelte';

	// Tabs
	let items = ['Data Scientist', 'Dev'];
	let activeItem = 'Data Scientist';
	const tabChange = (e) => {
		activeItem = e.detail;
	}

	const handleAdd = (e) => {
		activeItem = 'Data Scientist';
	};

</script>

<Header/>
	<h3>Todo:</h3>
	<ol>
		<li>Cambiar la imagen de header</li>
		<li>Rellenar campo DS</li>
		<li>Rellenar campo dev</li>
		<li>Hacer que tengan distinto color</li>
		<li>Agregar proyectos a las pestañas</li>
	</ol>
	<main>
		<Tabs {activeItem} {items} on:tabChange={tabChange}/>
		{#if activeItem == 'Data Scientist'}
			<DataScientistTab />
		{:else if activeItem === 'Dev'}
			<DevTab />
		{:else if activeItem === 'Proyectos'}
			<p>Work in progress 🛠️</p>
		{/if}
	</main>
<Footer/>

<style>
	main{
		max-width: 70%;
		margin: 40px auto;
	}
</style> 
