<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
                class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">ИС-18</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table
                  class="table align-items-center justify-content-center mb-0"
              >
                <thead>
                <tr>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Неделя №
                  </th>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    №
                  </th>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    ФИО
                  </th>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Всего пар
                  </th>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Пропещено часов
                  </th>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Процент пропусков
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <div class="d-flex px-2">
                      <div class="my-auto">
                        <h6 class="mb-0 text-sm">7</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-sm font-weight-bold mb-0">1</p>
                  </td>
                  <td>
                    <p class="text-sm font-weight-bold mb-0">Костенко Никита Викторович</p>
                  </td>
                  <td>
                    <p class="text-sm font-weight-bold mb-0">142</p>
                  </td>
                  <td>
                    <p class="text-sm font-weight-bold mb-0">74</p>
                  </td>
                  <td>
                    <p class="text-sm font-weight-bold mb-0">29%</p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Month"
}
</script>

<style scoped>

</style>