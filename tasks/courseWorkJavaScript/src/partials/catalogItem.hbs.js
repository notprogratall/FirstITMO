import backetIcon from './shoppingBasket.svg';

export const tmplItem = `
{{#each itemsData}}
<!-- Product card... -->
<div item-id='{{ id }}' class="group relative">
    {{#if (checkLocalStorage this)}}
        <!-- круг иконки корзины -->
        <div data-id="circleCart" class="flex justify-center items-center rounded-full p-1 h-7 w-7 bg-gray-300 absolute top-4 left-4 z-10">
            ${backetIcon}
        </div>
        <!-- картинка -->
        <div class="aspect-3/4 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
            <img src='{{ image }}' alt='{{name}}' class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <!-- Поля с текстом -->
        <div class="mt-4 flex flex-col justify-between">
            <div class="flex flex-row">

                <!-- название товара -->
                <div class="relative overflow-hidden">
                    
                    <h3 class="truncate font-sans text-sm text-gray-700 mr-2">
                        <a href="#">
                            {{ name }}
                        </a>
                    </h3>
                </div>

                <!-- цена -->
                {{#if (checkDiscount this)}}
                <del class="font-sans text-sm ml-auto mr-1 font-medium text-gray-900">{{price}}₽</del>
                <p class="font-sans text-sm ml-auto mr-1 font-medium text-gray-900">
                    {{#discount_price this}}{{price}}{{discount}}{{/discount_price}}₽
                </p>
                <!-- скидка -->
                <p class="font-sans text-sm font-medium text-red-500">
                
                (-{{ discount }}%)
                </p>

                {{else}}

                <p class="font-sans text-sm ml-auto mr-1 font-medium text-gray-900">{{price}}₽</p>
                {{/if}}
            </div>
            <div class="relative overflow-hidden">

                <!-- описание товара -->
                <p class="text-justify truncate line-clamp-5 lg:line-clamp-3 text-balance font-sans mt-1 text-xs text-gray-500">
                    {{ description }}
                </p>
            </div>

            <!-- кнопка добавления в корзину -->
            <div item-id='{{ id }}' data-id="addButton" class="text-balance font-sans text-xs text-white mt-4 mx-12 block rounded-lg bg-teal-600 py-2 text-center hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                В корзину
            </div>
        </div>
        {{else}}
        <!-- круг иконки корзины -->
        <div data-id="circleCart" class="flex justify-center items-center rounded-full p-1 h-7 w-7 bg-teal-500 absolute top-4 left-4 z-10">
            ${backetIcon}
        </div>
        <!-- картинка -->
        <div class="aspect-3/4 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
            <img src='{{ image }}' alt='{{name}}' class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <!-- Поля с текстом -->
        <div class="mt-4 flex flex-col justify-between">
            <div class="flex flex-row">

                <!-- название товара -->
                <div class="relative overflow-hidden">

                    <h3 class="truncate font-sans text-sm text-gray-700 mr-2">
                        <a href="#">
                            {{ name }}
                        </a>
                    </h3>
                </div>

                <!-- цена -->
                {{#if (checkDiscount this)}}
                <del class="font-sans text-sm ml-auto mr-1 font-medium text-gray-900">{{price}}₽</del>
                <p class="font-sans text-sm ml-auto mr-1 font-medium text-gray-900">
                    {{#discount_price this}}{{price}}{{discount}}{{/discount_price}}₽
                </p>
                <!-- скидка -->
                <p class="font-sans text-sm font-medium text-red-500">

                (-{{ discount }}%)
                </p>
                {{else}}
                <p class="font-sans text-sm ml-auto mr-1 font-medium text-gray-900">{{price}}₽</p>
                {{/if}}
            </div>
            <div class="relative overflow-hidden">

                <!-- описание товара -->
                <p class="text-justify truncate line-clamp-5 lg:line-clamp-3 text-balance font-sans mt-1 text-xs text-gray-500">
                    {{ description }}
                </p>
            </div>

            <!-- кнопка добавления в корзину -->
            <div item-id='{{ id }}' data-id="addButton" class="disabled text-balance font-sans text-xs text-white mt-4 mx-12 block rounded-lg bg-gray-300 py-2 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600">
                Добавлено
            </div>
        </div>
    {{/if}}
</div>
<!-- ...End of product card -->
{{/each}}
`