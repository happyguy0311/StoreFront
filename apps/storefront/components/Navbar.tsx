import React from "react";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useLocalStorage } from "react-use";

import { useCheckoutByTokenQuery } from "@/saleor/api";
import { CHECKOUT_TOKEN } from "@/lib/const";

export const Navbar: React.VFC = ({}) => {
  const [token] = useLocalStorage(CHECKOUT_TOKEN);
  const { data } = useCheckoutByTokenQuery({
    variables: { checkoutToken: token },
  });

  const counter = data ? data.checkout!.lines?.length : 0;

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between h-16">
          <Link href="/">
            <a>
              <img className="block h-16 w-auto" src="/saleor.svg" alt="" />
            </a>
          </Link>
          <div className="flex space-x-8">
            <Link href="/cart">
              <a className="group -m-2 p-2 flex items-center">
                <ShoppingBagIcon
                  className="flex-shink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {counter}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
