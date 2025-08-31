import React, { FC, ReactNode } from 'react';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface TextSectionProps {
  type?: "title" | "subtitle" | "default" | "defaultSemiBold";
  text?: string;
  styles?: { [key: string]: any };
  description?: string;
  children?: ReactNode;
  direction?: "row" | "column";
}

const TextSection: FC<TextSectionProps> = ({ type, text, styles, description, direction, children }) => {
  return (
    <ThemedView style={[styles?.titleContainer, { flexDirection: direction }, { marginTop: styles?.marginTop ?? 0 }]}>
      {text ? <ThemedText type={type}>{text}</ThemedText> : null}
      {children ? children : description ? <ThemedText>{description}</ThemedText> : null}
    </ThemedView>
  );
};

export { TextSection };
