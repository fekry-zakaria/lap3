const { z } = require("zod");

export const schame =z.object({
    name: z.string().min(2).max(10),
    email: z.string().email(),
    userName:z.string().min(2).max(10)
    
})