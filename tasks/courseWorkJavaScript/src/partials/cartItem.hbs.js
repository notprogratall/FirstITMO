import trashIcon from './trashCan.svg';
import nextIcon from './next.svg';
import previousIcon from './previous.svg';

export const tmplItem = `
{{#each itemsData}}
<li item-id='{{ id }}' role="listitem" class="w-full gap-x-6 py-5">
    <div class="flex justify-between flex-row gap-x-4 ">
        <!-- картинка товара -->
        <div class="aspect-3/4 h-24 ">
            <img class="h-full w-full object-cover object-center  flex-none rounded-md bg-gray-50"
            src='{{ image }}' alt='{{ name }}'>
        </div>

        <div class="flex flex-col justify-center overflow-hidden flex-grow gap-2">
            <!-- название товара -->
            <p class="truncate font-sans text-base text-gray-900">
            {{ name }}
            </p>
            <!-- кнопка удаления -->
            <div data-id="delButton" item-id='{{ id }}' class="flex justify-center items-center rounded-md h-7 w-24 bg-white text-center ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <!-- иконка корзины -->
                <div class="h-4 w-4">
                    ${trashIcon}
                </div>
                <p class="text-balance font-sans text-xs text-gray-500 ml-2">
                    Удалить
                </p>
            </div>
        </div>

        <!-- цены -->
        <div item-id='{{ id }}' data-id="price" class="flex flex-row justify-end items-center mx-0 w-32 gap-1">
            {{#if (checkDiscount this)}}
            <del class="hidden md:block font-sans overflow-hidden  text-sm text-gray-900">
                {{#countPrice this}}{{ price }}{{ amount }}{{/countPrice}}₽
                </del>
                <p class="font-sans overflow-hidden  text-sm text-gray-900">
                {{#discountPrice this}}{{ price }}{{ discount }}{{ amount }}{{/discountPrice}}₽
                </p>
            {{else}}
                <p class="font-sans overflow-hidden  text-sm text-gray-900">
                {{#countPrice this}}{{ price }}{{ amount }}{{/countPrice}}₽
                </p>
            {{/if}}
        </div>
        <!-- кнопки количества -->
        <div class="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
            <div class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <p data-id="previousButton" class="hidden md:w-8 md:inline-flex relative  items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    ${previousIcon}
                </p>
                <input item-id='{{ id }}' data-id="amountInput" type="text" value='{{ amount }}' pattern="[0-9]*" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '')" 
                class="w-10 relative inline-flex items-center px-2 py-2 text-center text-gray-600 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0">
                <p data-id="nextButton" class="hidden md:w-8 md:inline-flex relative items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    ${nextIcon}
                </p>
            </div>
        </div>
    </div>
</li>
{{/each}}
`

export const tmplPrice = `
{{#if (checkDiscount itemData)}}
    <del class="hidden md:block font-sans overflow-hidden text-sm text-gray-900 ">
    {{#countPrice itemData}}{{ price }}{{ amount }}{{/countPrice}}₽
    </del>
    <p class="font-sans overflow-hidden  text-sm text-gray-900">
    {{#discountPrice itemData}}{{ price }}{{ discount }}{{ amount }}{{/discountPrice}}₽
    </p>
{{else}}
    <p class="font-sans overflow-hidden  text-sm text-gray-900">
    {{#countPrice itemData}}{{ price }}{{ amount }}{{/countPrice}}₽
    </p>
{{/if}}
`


