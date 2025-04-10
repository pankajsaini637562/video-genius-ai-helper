
import React from 'react';
import { ContentLength } from '@/utils/aiGenerator';
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

interface ContentLengthSelectorProps {
  value: ContentLength;
  onChange: (value: ContentLength) => void;
  className?: string;
}

const ContentLengthSelector = ({ value, onChange, className }: ContentLengthSelectorProps) => {
  return (
    <Select value={value} onValueChange={(val) => onChange(val as ContentLength)}>
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder="Select content length" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Content Length</SelectLabel>
          <SelectItem value="short">Short (~3 min video)</SelectItem>
          <SelectItem value="medium">Medium (~10 min video)</SelectItem>
          <SelectItem value="long">Long (~20+ min video)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ContentLengthSelector;
