import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Plus, X } from "lucide-react";

export const PropertyForm = ({
  onSubmit,
  initialData,
}: {
  onSubmit: (data: any) => void;
  initialData?: any;
}) => {
  const { toast } = useToast();
  const [images, setImages] = useState<string[]>(initialData?.images || []);
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    location: initialData?.location || "",
    price: initialData?.price || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.location || !formData.price) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    onSubmit({ ...formData, images });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Title *</label>
        <Input
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          placeholder="Enter property title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <Textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Enter property description"
          className="min-h-[100px]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Location *</label>
        <Input
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          placeholder="Enter property location"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Monthly Rent *</label>
        <Input
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
          placeholder="Enter monthly rent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Images</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {images.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Property ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-lg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
          <label className="border-2 border-dashed rounded-lg p-4 h-32 flex items-center justify-center cursor-pointer hover:border-primary">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Plus className="h-6 w-6" />
          </label>
        </div>
      </div>

      <Button type="submit" className="w-full">
        {initialData ? "Update Property" : "Add Property"}
      </Button>
    </form>
  );
};