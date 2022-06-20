<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
                class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">Еженедельный отчет о посещаемости</h6>
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
                    Группа
                  </th>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Неделя
                  </th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <div class="d-flex px-2">
                      <div class="my-auto">
                        <h6 class="mb-0 text-sm">ИС-18</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-sm font-weight-bold mb-0">7</p>
                  </td>
                  <td>
                    <router-link to="/Weekly/ИС-18">Открыть</router-link>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">Ежемесячный отчет о посещаемости</h6>
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
                      Группа
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Месяц
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="d-flex px-2">
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">ИС-18</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">Март</p>
                    </td>
                    <td>
                      <router-link to="/Month/ИС-18">Открыть</router-link>
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
  name: "tables",
};
</script>
