"use client";
import React from "react";
import Header from "@/components/Header";
import ProductCard from "./ProductCard";

import { products, categories, tags } from "./store";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";

export default function Store() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-11 items-start gap-6 border-t py-6">
        <ProductSidebar categories={categories} />

        <div className="product-and-filter-wrapper col-span-11 lg:col-span-8 pr-4">
          <div className="filters flex gap-3 mb-4">
            <div className="search flex">
              <Input
                className="inline-block"
                type="search"
                placeholder="Search product"
              />
              <Button
                variant="outline"
                className="-translate-x-full rounded-s-none group/search-button"
              >
                <IconSearch className="text-gray-400 group-hover/search-button:text-gray-800" />
              </Button>
            </div>

            <div className="tag-filter ml-auto inline-block">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tags"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(tags).map((tag) => (
                    <SelectItem key={tag[0] + tag[1]} value={tag[0]}>
                      {tag[0]} ({tag[1]})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="select-group inline-block">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="important">Relevance</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="profitable">Most Profitable</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="products flex flex-wrap justify-center gap-3 ">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ProductSidebar() {
  return (
    <div className="max-h-screen sticky top-0 py-4 overflow-y-auto col-span-3 hidden lg:block">
      <p className="text-sm text-center mb-2 uppercase tracking-widest text-neutral-500">
        Categories
      </p>
      <div className="product-categories divide-y">
        {Object.entries(categories).map((cat, _) => (
          <Button
            key={cat + _}
            variant="ghost"
            className="block w-full text-left rounded-none"
          >{`${cat[0]} (${cat[1]})`}</Button>
        ))}
      </div>
    </div>
  );
}
