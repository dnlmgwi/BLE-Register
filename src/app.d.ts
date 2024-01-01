// See https://kit.svelte.dev/docs/types#app

import type { Database } from '$lib/generated/supabase/types';
import type { SupabaseClient, Session as SupabaseSession } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}

		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<SupabaseSession | null>;
		}

		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
