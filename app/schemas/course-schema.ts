import { z } from 'zod'

export const courseSchema = z.object({
  title: z.string().min(3, 'Course title must be at least 3 characters long'),
  description: z.string().min(20, 'Course description must be at least 20 characters long'),
  price: z
    .number()
    .positive('Price must be a positive number'),
  duration: z
    .number()
    .positive('Duration must be a positive decimal number'),
  type: z.enum(['FREE', 'PAID']),
  level: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
  category: z.enum([
    'WEB_DEVELOPMENT',
    'MOBILE_DEVELOPMENT',
    'DATA_SCIENCE',
    'DEVOPS',
    'GAME_DEVELOPMENT',
    'SECURITY',
    'SOFT_SKILLS',
    'PROGRAMMING_LOGIC',
    'CLOUD',
    'TESTING',
    'AI_ML',
  ]),
  author: z.string(),
  discount: z.number().optional(),
  guarantee: z.number().optional(),
})

const updateCourseSchema = z.object({
  slug: z.string().min(3, 'Slug must be at least 3 characters long').optional(),
  title: z.string().min(3, 'Course title must be at least 3 characters long').optional(),
  description: z
    .string()
    .min(20, 'Course description must be at least 20 characters long')
    .optional(),
  price: z.number().positive('Price must be a positive number').optional(),
  duration: z.number().positive('Duration must be a positive decimal number').optional(),
  order: z.number().int().positive('Order must be a positive integer').optional(),
  type: z.enum(['FREE', 'PAID']).optional(),
  level: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']).optional(),
  author: z.string().optional(),
  discount: z.number().optional(),
  guarantee: z.number().optional(),
  category: z
    .enum([
      'WEB_DEVELOPMENT',
      'MOBILE_DEVELOPMENT',
      'DATA_SCIENCE',
      'DEVOPS',
      'GAME_DEVELOPMENT',
      'SECURITY',
      'SOFT_SKILLS',
      'PROGRAMMING_LOGIC',
      'CLOUD',
      'TESTING',
      'AI_ML',
    ])
    .optional(),
})



export type CourseFormValues = z.infer<typeof courseSchema>
