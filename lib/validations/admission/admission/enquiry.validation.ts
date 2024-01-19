// Imports
import * as z from 'zod';





// Enquiry Validation
export const EnquiryValidation = z.object({
    enquiry_no:z.number({invalid_type_error:'*Please enquiry number'}).or(z.string().nonempty({message:'*Please enter enquiry number'})).pipe(z.coerce.number({invalid_type_error:'*Please enter a numeric value'})),
    enquiry_date:z.object({
        year:z.string(),
        month:z.string(),
        day:z.string()
    }),
    visitor_name:z.string().nonempty({message:'*Visitor name is required'}),
    visitor_address:z.string().nonempty({message:'*Visitor address is required'}),
    mobile_no:z.number({invalid_type_error:'*Please enter mobile number'}).or(z.string().nonempty({message:'*Please enter mobile number'})).pipe(z.coerce.number({invalid_type_error:'*Please enter a numeric value'})),
    purpose:z.string().nonempty({message:'*Purpose is required'}),
    contact_person:z.string(),
    reference_details:z.string()
});