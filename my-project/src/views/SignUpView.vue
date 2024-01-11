<template>
    <div class="flex">
        <img src="/src/assets/imgs/homePageImgs/image 2.png" alt="">
        <div class="flex flex-1 flex-col mx-12 mt-12">

            <router-link to="/">
                <img class="w-16 ml-4" src="/src/assets/imgs/gallery/arrow-circle-left-svgrepo-com 3.png" alt="">
            </router-link>
            <div class=" flex flex-1 flex-col justify-center px-16  lg:px-8">
                <div>
                    <h2 class="  text-5xl font-semibold leading-9 tracking-tight text-gray-900">რეგისტრაცია</h2>
                </div>
                <div class="pt-16 ">
                    <form class="" action="#" method="POST">
                        <div class=" flex flex-col gap-y-12">
                            <div class="flex justify-between ">
                                <div class="mt-2">
                                    <input name="name" type="name" autocomplete="name" required placeholder="სახელი"
                                        class="block pl-9 text-3xl bg-[#D9D9D9] w-[430px] rounded-sm focus:border-gray-900 focus:border-[1px] py-7 text-black  placeholder:text-gray-400 placeholder:text-2xl " />
                                </div>
                                <div class="mt-2">
                                    <input name="lastname" type="lastname" autocomplete="lastname" required
                                        placeholder="გვარი"
                                        class="block pl-9 text-3xl bg-[#D9D9D9] w-[430px] rounded-sm focus:border-black focus:border-[1px] py-7 text-black  placeholder:text-gray-400 placeholder:text-2xl " />
                                </div>
                            </div>
                            <div class="mt-2">
                                <input name="ID" type="ID" autocomplete="ID" required placeholder=" პირადი ნომერი"
                                    class="block pl-9 text-3xl bg-[#D9D9D9] w-full rounded-sm focus:border-gray-900 focus:border-[1px] py-7 text-black  placeholder:text-gray-400 placeholder:text-2xl " />
                            </div>
                            <div class="mt-2">
                                <input name="number" type="number" autocomplete="number" required placeholder="ტელ. ნომერი"
                                    class="block pl-9 text-3xl bg-[#D9D9D9] w-full rounded-sm focus:border-gray-900 focus:border-[1px] py-7 text-black  placeholder:text-gray-400 placeholder:text-2xl  " />
                            </div>
                            <div class="mt-2">
                                <input name="email" type="email" autocomplete="email" required placeholder="ელ. ფოსტა"
                                    class="block pl-9 text-3xl bg-[#D9D9D9] w-full rounded-sm focus:border-gray-900 focus:border-[1px] py-7 text-black  placeholder:text-gray-400 placeholder:text-2xl " />
                            </div>
                        </div>

                        <div class="flex justify-end mt-16">
                            <button type="submit"
                                class=" w-80  rounded-md bg-[#1C5178] px-3 py-7 text-2xl leading-6 text-white shadow-sm ">შემდეგი</button>
                        </div>
                        <p class="mt-10 text-center text-2xl text-gray-900">
                            უკვე გაქვთ ანგარიში ?
                            <a href="#" class="font-semibold leading-6 text-[#1C5178]">ავტორიზაცია</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>
