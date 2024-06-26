export const popWindow = `
<div id="info-popup" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
  <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
      <div class="relative p-4 bg-white rounded-lg shadow-lg md:p-8">
          <div class="mb-4 text-sm font-light text-gray-500 ">
              <h3 class="font-sans mb-3 text-2xl font-bold text-gray-900">Заказ оформлен</h3>
              <p>
                Номер заказа:    
              </p>
              <p data-id="generatedNumber">
                2342342-123dde-123
              </p>
          </div>
          <div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
              <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                  <button id="close-modal" type="button"  class="font-sans py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10">OK</button>
              </div>
          </div>
      </div>
  </div>
</div>
`