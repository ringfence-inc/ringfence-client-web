"use client";
import React from "react";

// Hooks
import { useMemo } from "react";

// Utils
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import type Entity from "@ant-design/cssinjs/es/Cache";

export interface AntdRegistryProps {
  children?: React.ReactNode;
}

export const AntdRegistry = ({ children }: AntdRegistryProps) => {
  const cache = useMemo<Entity>(() => createCache(), [createCache]);
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdRegistry;
