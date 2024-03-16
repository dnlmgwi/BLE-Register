import { z } from 'zod';

export const profileSchema = z.object({
	student_name: z.string().min(5),
	student_id: z.string().min(1).max(9),
	avatar_url: z.string()
});

export default profileSchema;
