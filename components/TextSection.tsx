/** Package Imports */
import React, { FC, ReactNode } from 'react';

/** Components/Utils/Styles/Types Imports */
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

const TextSection: FC<TextSectionProps> = ({ type, text, styles, description, children, direction = 'column' }) => {
  return (
    <ThemedView style={[styles?.titleContainer, { flexDirection: direction }]}>
      {text && (<ThemedText type={type}>{text}</ThemedText>)}
      {children || (
        description && (
          <ThemedText style={{ textAlign: 'center', marginTop: 5 }}>
            {description}
          </ThemedText>
        )
      )}
    </ThemedView>
  );
};

export { TextSection };
