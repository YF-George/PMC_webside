<script>
    export let title = 'Welcome!';
    export let content = 'This is the content of the page.';
</script>

<div class="mx-auto text-center h-screen flex justify-center items-center">
    <div class="text-2xl py-10 bg-gray-300 bg-opacity-20 rounded-lg px-6 sm:px-10 md:px-20 lg:px-32 my-10 w-full sm:w-5/6 md:w-2/3 lg:w-3/4 xl:w-4/5" style="white-space: pre-line; text-align: center;">
        <h2 class="font-bold text-yellow-400 text-5xl py-10">{title}</h2>
        <div>{content}</div>
    </div>
</div>