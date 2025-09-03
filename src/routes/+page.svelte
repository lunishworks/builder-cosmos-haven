<script lang="ts">
	// Forum data structure
	interface Thread {
		id: string;
		title: string;
		username: string;
		avatar: string;
		replies: number;
		views: number;
		timeAgo: string;
		status: 'pinned' | 'unseen' | 'seen';
	}

	// Sample forum data
	const threads: Thread[] = [
		{
			id: '1',
			title: 'Thread name (pinned)',
			username: 'Username',
			avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/652d7532b54a7efc74aab99f71a9a0ad24354af2?width=96',
			replies: 2,
			views: 4,
			timeAgo: '5 hour(s) ago',
			status: 'pinned'
		},
		{
			id: '2',
			title: 'Thread name (unseen)',
			username: 'Username',
			avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/652d7532b54a7efc74aab99f71a9a0ad24354af2?width=96',
			replies: 2,
			views: 4,
			timeAgo: '5 hour(s) ago',
			status: 'unseen'
		},
		{
			id: '3',
			title: 'Thread name (seen)',
			username: 'Username',
			avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/652d7532b54a7efc74aab99f71a9a0ad24354af2?width=96',
			replies: 2,
			views: 4,
			timeAgo: '5 hour(s) ago',
			status: 'seen'
		}
	];

	const categories = [
		{
			name: 'Category',
			sections: [
				{ name: 'Section', active: false },
				{ name: 'Section 2', active: true },
				{ name: 'Section 3', active: false },
				{ name: 'Section 4', active: false }
			]
		},
		{
			name: 'Category',
			sections: []
		}
	];
</script>

<div class="min-h-screen bg-[#0A0A0A] font-anybody">
	<!-- Navigation Bar -->
	<nav class="fixed top-0 left-0 right-0 z-50 px-4 py-4 hidden lg:block">
		<div class="max-w-7xl mx-auto">
			<div class="bg-forum-bg rounded-forum shadow-forum px-8 py-4">
				<div class="flex items-center justify-between">
					<!-- Left Navigation -->
					<div class="flex items-center space-x-8">
						<a href="/" class="text-forum-text text-2xl font-normal hover:text-forum-accent-green transition-colors">
							Home
						</a>
						<a href="/account" class="text-forum-text text-2xl font-normal hover:text-forum-accent-green transition-colors">
							Account
						</a>
						<a href="/forums" class="text-forum-text text-2xl font-normal hover:text-forum-accent-green transition-colors">
							Forums
						</a>
					</div>

					<!-- Right Navigation -->
					<div class="flex items-center space-x-8">
						<a href="/admin" class="text-forum-text text-2xl font-normal hover:text-forum-accent-green transition-colors">
							Admin
						</a>
						<a href="/logout" class="text-forum-text text-2xl font-normal hover:text-forum-accent-green transition-colors">
							Logout
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- Mobile Navigation Bar -->
	<nav class="fixed top-0 left-0 right-0 z-50 px-4 py-4 lg:hidden">
		<div class="bg-forum-bg rounded-forum shadow-forum px-6 py-3">
			<div class="flex items-center justify-between">
				<h1 class="text-forum-text text-xl font-bold">Forum</h1>
				<button class="text-forum-text hover:text-forum-accent-green">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
		</div>
	</nav>

	<!-- Main Content -->
	<div class="pt-24 lg:pt-32 px-4 pb-24 lg:pb-8">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col lg:flex-row gap-4 lg:gap-8">
				<!-- Sidebar -->
				<div class="w-full lg:w-80 lg:flex-shrink-0 order-2 lg:order-1">
					<div class="bg-forum-bg rounded-forum shadow-forum p-4 lg:p-6">
						{#each categories as category}
							<div class="mb-6 lg:mb-8">
								<h2 class="text-forum-text text-xl lg:text-2xl font-normal mb-3 lg:mb-4">{category.name}</h2>
								{#if category.sections.length > 0}
									<div class="space-y-1 lg:space-y-2">
										{#each category.sections as section}
											<div class="text-forum-text text-base lg:text-lg {section.active ? 'font-bold' : 'font-normal'} hover:text-forum-accent-green transition-colors cursor-pointer">
												{section.name}
											</div>
										{/each}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>

				<!-- Main Forum Content -->
				<div class="flex-1 order-1 lg:order-2">
					<div class="bg-forum-bg rounded-forum shadow-forum p-4 lg:p-8">
						<!-- Forum Header -->
						<div class="mb-6 lg:mb-8">
							<h1 class="text-forum-text text-2xl lg:text-3xl font-bold">Forums</h1>
						</div>

						<!-- Thread List -->
						<div class="space-y-4 lg:space-y-6">
							{#each threads as thread, index}
								<div class="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
									<!-- Avatar -->
									<img
										src={thread.avatar}
										alt={thread.username}
										class="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex-shrink-0"
									/>

									<!-- Thread Content -->
									<div class="flex-1 min-w-0">
										<!-- Thread Title -->
										<h3 class="text-sm lg:text-lg font-bold leading-5 lg:leading-6 mb-1 {thread.status === 'pinned' ? 'text-forum-accent-yellow' : thread.status === 'unseen' ? 'text-forum-accent-green' : 'text-forum-text'} truncate lg:whitespace-normal">
											{thread.title}
										</h3>

										<!-- Username and Stats -->
										<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-1 lg:space-y-0">
											<span class="text-forum-text text-sm lg:text-lg font-normal">{thread.username}</span>
											<span class="text-forum-text text-xs lg:text-sm font-normal opacity-80">
												{thread.replies} replies(s) {thread.views} view(s) {thread.timeAgo}
											</span>
										</div>
									</div>
								</div>

								<!-- Divider -->
								{#if index < threads.length - 1}
									<div class="h-px bg-forum-divider"></div>
								{/if}
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation Menu (hidden on desktop) -->
	<div class="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
		<div class="bg-forum-bg rounded-forum shadow-forum px-4 py-3">
			<div class="flex items-center justify-between">
				<a href="/" class="text-forum-text text-xs font-normal hover:text-forum-accent-green transition-colors">Home</a>
				<a href="/account" class="text-forum-text text-xs font-normal hover:text-forum-accent-green transition-colors">Account</a>
				<a href="/forums" class="text-forum-text text-xs font-normal hover:text-forum-accent-green transition-colors">Forums</a>
				<a href="/admin" class="text-forum-text text-xs font-normal hover:text-forum-accent-green transition-colors">Admin</a>
				<a href="/logout" class="text-forum-text text-xs font-normal hover:text-forum-accent-green transition-colors">Logout</a>
			</div>
		</div>
	</div>
</div>

<style>
	/* Custom scrollbar for better aesthetics */
	:global(body) {
		scrollbar-width: thin;
		scrollbar-color: #626262 #1F1F1F;
	}
	
	:global(body::-webkit-scrollbar) {
		width: 8px;
	}
	
	:global(body::-webkit-scrollbar-track) {
		background: #1F1F1F;
	}
	
	:global(body::-webkit-scrollbar-thumb) {
		background-color: #626262;
		border-radius: 4px;
	}
</style>
