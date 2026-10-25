import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ChevronDown, ClipboardPlus, FileX2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Add New Travel Package | Wanderlast",
  description: "Create a new travel package for the Wanderlast catalog.",
}

const categories = [
  "Beach",
  "Mountain",
  "City",
  "Adventure",
  "Cultural",
] as const

const fieldClassName =
  "h-9 rounded-sm border border-transparent bg-[#f7f8fa] px-3 text-[13px] text-neutral-900 shadow-none placeholder:text-neutral-400 focus-visible:border-neutral-300 focus-visible:ring-2 focus-visible:ring-brand/15 md:text-[13px]"

type FormFieldProps = {
  id: string
  label: string
  children: ReactNode
  className?: string
}

function FormField({ id, label, children, className }: FormFieldProps) {
  return (
    <div className={className}>
      <Label
        htmlFor={id}
        className="mb-1.5 text-xs leading-none font-medium text-neutral-800"
      >
        {label}
      </Label>
      {children}
    </div>
  )
}

export default function AddDestination() {
  export function Basic() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data)
    const response = await fetch("http://localhost:5000//add-dest",{
      method: "POST",
      body: JSON.stringify({data}),
      headers: {
          "Content-Type": "application/json",
      }

    })
    const result = await response.json();

    console.log(result)



  }
  return (
    <main className="min-h-svh bg-white px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-[900px]">
        <h1 className="font-serif text-[clamp(2rem,4vw,2.375rem)] leading-tight font-normal tracking-[-0.01em] text-neutral-900">
          Add New Travel Package
        </h1>

        <form onSubmit={onSubmit} className="mx-auto mt-10 w-full max-w-[560px] border border-neutral-100 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:mt-12 sm:p-8">
          <div className="space-y-3.5">
            <FormField id="destination-name" label="Destination Name">
              <Input
                id="destination-name"
                name="destinationName"
                placeholder="Bali Paradise"
                autoComplete="off"
                className={fieldClassName}
              />
            </FormField>

            <div className="grid gap-3.5 sm:grid-cols-2">
              <FormField id="country" label="Country">
                <Input
                  id="country"
                  name="country"
                  placeholder="Indonesia"
                  autoComplete="country-name"
                  className={fieldClassName}
                />
              </FormField>

              <FormField id="category" label="Category">
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    defaultValue="beach"
                    className={cn(
                      fieldClassName,
                      "w-full appearance-none pr-9 text-neutral-500 focus:outline-none"
                    )}
                  >
                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category.toLowerCase()}
                        className="text-neutral-900"
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 text-neutral-500"
                  />
                </div>
              </FormField>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              <FormField id="price" label="Price (USD)">
                <Input
                  id="price"
                  name="price"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g., 1299"
                  className={fieldClassName}
                />
              </FormField>

              <FormField id="duration" label="Duration">
                <Input
                  id="duration"
                  name="duration"
                  placeholder="e.g., 7 Days/6 Nights"
                  className={fieldClassName}
                />
              </FormField>
            </div>

            <FormField id="departure-date" label="Departure Date">
              <Input
                id="departure-date"
                name="departureDate"
                type="text"
                inputMode="numeric"
                placeholder="mm/dd/yyyy"
                className={fieldClassName}
              />
            </FormField>

            <FormField id="image-url" label="Image URL">
              <Input
                id="image-url"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className={fieldClassName}
              />
            </FormField>

            <FormField id="description" label="Description">
              <Textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Describe the travel experience..."
                className={cn(fieldClassName, "min-h-[92px] resize-none py-2")}
              />
            </FormField>
          </div>

          <div className="mt-6 flex justify-end gap-2.5">
            <Button
              type="button"
              variant="outline"
              className="h-9 gap-2 rounded-sm border-red-200 bg-white px-4 text-xs text-red-500 shadow-none hover:border-red-300 hover:bg-red-50 hover:text-red-600"
            >
              <FileX2 aria-hidden="true" className="size-3.5" />
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-9 gap-2 rounded-sm bg-brand px-4 text-xs text-white shadow-none hover:bg-brand-dark"
            >
              <ClipboardPlus aria-hidden="true" className="size-3.5" />
              Add Travel Package
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
