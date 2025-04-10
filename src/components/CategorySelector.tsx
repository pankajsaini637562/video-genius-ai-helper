
import React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const CATEGORIES = [
  { id: 'tech', name: 'Technology & Gadgets' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'education', name: 'Education & How-To' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'vlog', name: 'Vlogging & Lifestyle' },
  { id: 'business', name: 'Business & Finance' },
  { id: 'fashion', name: 'Fashion & Beauty' },
  { id: 'fitness', name: 'Health & Fitness' },
  { id: 'food', name: 'Food & Cooking' },
  { id: 'music', name: 'Music' },
  { id: 'travel', name: 'Travel' },
  { id: 'auto', name: 'Auto & Vehicles' },
];

interface CategorySelectorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const CategorySelector = ({ value, onChange, className }: CategorySelectorProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Content Categories</SelectLabel>
          {CATEGORIES.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategorySelector;
