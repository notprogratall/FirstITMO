export const cartLayout = `
<div class="flex flex-col items-center align-middle flex-1 my-4 mx-4 md:my-12 md:mx-20">
    <ul role="list" class="flex flex-col w-full divide-y divide-gray-100 ">
    {{>items}}
    </ul>

    <!-- общая сумма -->
    <div class="flex flex-col items-center align-middle w-full mt-16">
        <div class="flex flex-row gap-1">
            <p class="font-sans text-sm text-gray-900">Сумма заказа:</p>
            <p data-id="sum" class="font-sans text-sm text-gray-900">
            {{ calculateTotal itemsData }}
            </p>
        </div>
        <!-- кнопка оформления заказа -->
        <div data-id="orderButton" class="text-balance font-sans text-xs text-white w-1/3 mt-4 rounded-lg bg-teal-600 py-2 text-center hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
            Оформить заказ
        </div>
    </div>
</div>
`

export const tmplTotal = `
    {{ calculateTotal itemsData }}
    
`