import Link from 'next/link';
import React from 'react'
import { TypingText } from '@/components';

type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type TwoDShape = Exclude<ShapeType, "cube">
type ThemeType = "dark" | "light"
type ColorType = "red" | "blue" | "yellow"

type ItemProps = {
    // color: `${ThemeType}-${ColorType}`;
    color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
}

export default function TSmix() {
  const shape : ShapeType = "cube";
  const twoD : TwoDShape = "triangle";
  const picked:ItemProps = {color:"dark-blue"};

    return (
    <div className='mt-32'>
        <h1>Picked color is {picked.color}</h1>
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <Link href="/">Home</Link>
    </div>
  )
}
