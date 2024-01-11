<template>
    <div class="flex">
        <img src="/src/assets/imgs/homePageImgs/image 2.png" alt="">
        <div class="flex flex-1 flex-col mx-12 my-12">
            <router-link to="/">
                <img class="w-16 ml-4" src="/src/assets/imgs/gallery/arrow-circle-left-svgrepo-com 3.png" alt="">
            </router-link>
            <div class=" flex flex-1 flex-col justify-center px-16 py-12 lg:px-8">
                <div>
                    <h2 class="mt-10  text-5xl font-semibold leading-9 tracking-tight text-gray-900">რეგისტრაცია</h2>
                </div>
                <div class="mt-32  ">
                    <form class="space-y-16" action="#" method="POST">
                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block pl-9 text-xl leading-6 text-gray-900">პაროლი</label>
                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password"
                                    required placeholder="პაროლი"
                                    class="block pl-9 text-3xl bg-[#D9D9D9] w-full rounded-sm focus:border-gray-900 focus:border-[1px] py-7 text-black  placeholder:text-gray-400 placeholder:text-2xl  " />
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block pl-9 text-xl leading-6 text-gray-900">გაიმეორეთ პაროლი</label>
                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password"
                                    required placeholder=" გაიმეორეთ პაროლი"
                                    class="block pl-9 text-3xl bg-[#D9D9D9] w-full rounded-sm focus:border-gray-900 focus:border-[1px] py-7 text-black  placeholder:text-gray-400 placeholder:text-2xl  " />
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                class="flex w-full justify-center rounded-md bg-[#1C5178] px-3 py-7 text-2xl font-semibold leading-6 text-white shadow-sm ">რეგისტრაცია</button>
                        </div>
                    </form>
                    <p class="mt-10 text-center text-2xl text-gray-900">
                        უკვე გაქვთ ანგარიში ?
                        <a href="#" class="font-semibold leading-6 text-[#1C5178]">ავტორიზაცია</a>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>
