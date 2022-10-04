import { useRouter } from "next/router"
import React from "react"

const Footer = () => {


  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Stables
          </h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class=" hover:underline">
                About
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Careers
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Brand Center
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Get in touch
          </h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <a href="https://discord.gg/YfsVtC8C" class="hover:underline">
                Discord
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Twitter
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                TikTok
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="py-6 px-4 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © 2022 Stables™
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <span class="">Privacy Policy</span>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <span class="">Terms &amp; Conditions</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
