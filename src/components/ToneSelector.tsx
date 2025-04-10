
import React from 'react';
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

export const TONES = [
  { id: 'professional', name: 'Professional' },
  { id: 'casual', name: 'Casual & Conversational' },
  { id: 'enthusiastic', name: 'Enthusiastic & Energetic' },
  { id: 'funny', name: 'Humorous & Entertaining' },
  { id: 'dramatic', name: 'Dramatic & Intense' },
  { id: 'educational', name: 'Educational & Informative' },
  { id: 'motivational', name: 'Motivational & Inspiring' },
  { id: 'controversial', name: 'Controversial & Thought-Provoking' },
];

interface ToneSelectorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const ToneSelector = ({ value, onChange, className }: ToneSelectorProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder="Select content tone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Content Tone</SelectLabel>
          {TONES.map((tone) => (
            <SelectItem key={tone.id} value={tone.id}>
              {tone.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ToneSelector;
