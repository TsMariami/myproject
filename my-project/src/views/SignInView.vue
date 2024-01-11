<template>
    <div class="flex">
        <img src="/src/assets/imgs/homePageImgs/image 2.png" alt="">
        <div class="flex flex-1 flex-col mx-12 my-12">
            <router-link to="/">
                <img class="w-16 ml-4" src="/src/assets/imgs/gallery/arrow-circle-left-svgrepo-com 3.png" alt="">
            </router-link>
            <div class=" flex flex-1 flex-col justify-center px-16 py-12 lg:px-8">
                <div>
                    <h2 class="mt-10  text-5xl font-semibold leading-9 tracking-tight text-gray-900">ავტორიზაცია</h2>
                </div>

                <div class="mt-32  ">
                    <form class="space-y-16" action="#" method="POST">
                        <div>
                            <div class="mt-2">
                                <input name="email" type="email" autocomplete="email" required
                                    placeholder="მომხმარებლის პირადი ნომერი ან ელ. ფოსტა"
                                    class="block pl-9 text-3xl bg-[#D9D9D9] w-full rounded-sm focus:border-gray-900 focus:border-[1px] py-7 text-black  placeholder:text-gray-400 placeholder:text-2xl " />
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block pl-9 text-xl leading-6 text-gray-900">პაროლი</label>

                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password"
                                    required placeholder="პაროლი"
                                    class="block pl-9 text-3xl bg-[#D9D9D9] w-full rounded-sm focus:border-gray-900 focus:border-[1px] py-7 text-black  placeholder:text-gray-400 placeholder:text-2xl  " />
                            </div>
                            <div class="flex mt-6 justify-between">
                                <div class="flex items-center mb-4">
                                    <input id="default-checkbox" type="checkbox" value=""
                                        class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded ">
                                    <label for="default-checkbox"
                                        class="ms-2 text-xl font-medium text-gray-900">დამახსოვრება</label>
                                </div>
                                <div class="text-sm">
                                    <a href="#"
                                        class="justify-end font-semibold text-[#1C5178] text-2xl font-bold">დაგავიწყდა
                                        პაროლი?</a>
                                </div>

                            </div>

                        </div>
                        <div>
                            <button type="submit"
                                class="flex w-full justify-center rounded-md bg-[#1C5178] px-3 py-7 text-2xl font-semibold leading-6 text-white shadow-sm ">ავტორიზაცია</button>
                        </div>
                    </form>
                    <p class="mt-16 text-center text-2xl text-gray-900">
                        არ გაქვთ ანგარიში ?
                        <a href="#" class="font-semibold leading-6 text-[#1C5178]">შექმნა</a>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>
