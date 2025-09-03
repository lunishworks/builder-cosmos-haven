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
	<nav class="fixed top-0 left-0 right-0 z-50 px-4 py-4">
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

	<!-- Main Content -->
	<div class="pt-32 px-4">
		<div class="max-w-7xl mx-auto">
			<div class="flex gap-8">
				<!-- Sidebar -->
				<div class="w-80 flex-shrink-0">
					<div class="bg-forum-bg rounded-forum shadow-forum p-6">
						{#each categories as category}
							<div class="mb-8">
								<h2 class="text-forum-text text-2xl font-normal mb-4">{category.name}</h2>
								{#if category.sections.length > 0}
									<div class="space-y-2">
										{#each category.sections as section}
											<div class="text-forum-text text-lg {section.active ? 'font-bold' : 'font-normal'} hover:text-forum-accent-green transition-colors cursor-pointer">
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
				<div class="flex-1">
					<div class="bg-forum-bg rounded-forum shadow-forum p-8">
						<!-- Forum Header -->
						<div class="mb-8">
							<h1 class="text-forum-text text-3xl font-bold">Forums</h1>
						</div>

						<!-- Thread List -->
						<div class="space-y-6">
							{#each threads as thread, index}
								<div class="flex items-start space-x-4 p-4 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
									<!-- Avatar -->
									<img 
										src={thread.avatar} 
										alt={thread.username} 
										class="w-12 h-12 rounded-full flex-shrink-0"
									/>

									<!-- Thread Content -->
									<div class="flex-1">
										<!-- Thread Title -->
										<h3 class="text-lg font-bold leading-6 mb-1 {thread.status === 'pinned' ? 'text-forum-accent-yellow' : thread.status === 'unseen' ? 'text-forum-accent-green' : 'text-forum-text'}">
											{thread.title}
										</h3>

										<!-- Username and Stats -->
										<div class="flex items-center justify-between">
											<span class="text-forum-text text-lg font-normal">{thread.username}</span>
											<span class="text-forum-text text-sm font-normal opacity-80">
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
		<div class="bg-forum-bg rounded-forum shadow-forum px-6 py-4">
			<div class="flex items-center justify-between">
				<a href="/" class="text-forum-text text-sm font-normal">Home</a>
				<a href="/account" class="text-forum-text text-sm font-normal">Account</a>
				<a href="/forums" class="text-forum-text text-sm font-normal">Forums</a>
				<a href="/admin" class="text-forum-text text-sm font-normal">Admin</a>
				<a href="/logout" class="text-forum-text text-sm font-normal">Logout</a>
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
