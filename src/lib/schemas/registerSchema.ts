import { z } from 'zod';

export const registerSchema = z.object({
	student_id: z.string().max(9)
});
