// Imports
import * as z from 'zod';





// Wing Validation
export const WingValidation = z.object({
    wing:z.string().nonempty({message:'*Wing is required'})
});