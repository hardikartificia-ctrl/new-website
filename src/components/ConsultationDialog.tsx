import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  companyName: z.string().trim().max(100, { message: "Company name must be less than 100 characters" }).optional(),
  phone: z.string().trim().min(10, { message: "Please enter a valid phone number" }).max(20, { message: "Phone number is too long" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: "",
    companyName: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      const validatedData = consultationSchema.parse(formData);
      setIsSubmitting(true);

      // Here you would normally send data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Consultation Booked!",
        description: "We'll contact you shortly to schedule your free consultation.",
      });

      setFormData({ name: "", companyName: "", phone: "", email: "" });
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ConsultationFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ConsultationFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ConsultationFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-highlight">Book Your Free Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 24 hours to discuss your AI automation needs.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange("name")}
              placeholder="John Doe"
              className={errors.name ? "border-destructive" : ""}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-foreground">
              Company Name
            </Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={handleChange("companyName")}
              placeholder="Your Company (Optional)"
              className={errors.companyName ? "border-destructive" : ""}
              disabled={isSubmitting}
            />
            {errors.companyName && <p className="text-sm text-destructive">{errors.companyName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange("phone")}
              placeholder="+91 98765 43210"
              className={errors.phone ? "border-destructive" : ""}
              disabled={isSubmitting}
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              placeholder="john@example.com"
              className={errors.email ? "border-destructive" : ""}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-highlight hover:bg-highlight/90 text-background"
            >
              {isSubmitting ? "Submitting..." : "Book Consultation"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
