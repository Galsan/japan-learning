"use client";
import { useEffect, useState } from "react";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import Carousel from "../../src/components/carousel/carousel";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Simulate loading time (you can replace this with actual data fetching)
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const cardData = [2, 5, 7, 8, 11, 15, 17, 33, 55, 66, 88, 99, 101, 120, 5, 7, 8, 11, 15, 17, 33, 55, 66, 81];

    return (
        <div className={`page ${open ? "overflow-hidden" : "overflow-auto"} `}>
            {isLoading ? (
                <div className="loader">Loading...</div>
            ) : (
                <div className="content">

                    <Navbar />
                    <nav className="menu">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <a href="#lessons">Lessons</a>
                    </nav>

                    <div >
                        <div className="bg-[url('/images/backgroundG.jpg')] bg-cover bg-center h-dvh w-dvw"></div>
                    </div>

                    <div className="container mx-auto p-4 flex px-12">
                        <h1>
                            Манай явуулж буй хөтөлбөрүүд<br />
                            Манайх Анхан дундаас IELTS, SAT, TOPIK, GMAT-ын сургалтыг явуулдаг
                        </h1>
                    </div>

                    <div className="container mx-auto p-4">
                        <Carousel
                            cardData={cardData} />
                    </div>

                    <div className="container mx-auto p-4 flex px-12">
                        <h1>
                            Мэдээ, мэдээлэл<br />
                            Онцлох мэдээ, мэдээллүүд
                        </h1>
                    </div>

                    <div className="container mx-auto p-4">
                        <Carousel
                            cardData={cardData} />
                    </div>

                    <div className="section mt-64" id="home">
                        Home:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est ipsa dicta, incidunt iusto veritatis qui! Iure exercitationem dolore aut recusandae illo cumque provident sunt sit. Unde reprehenderit aliquid recusandae consectetur, quia consequuntur cum nemo voluptate natus ipsum, officiis vitae commodi laudantium accusantium cumque, quod esse aliquam libero optio enim rem tenetur ad iste? Veniam explicabo vero enim provident autem dignissimos laudantium dolores fuga rerum excepturi suscipit aperiam odit, sequi illo sapiente iusto eius vel libero necessitatibus! Inventore aspernatur cupiditate obcaecati maxime optio officia quos, veritatis accusantium repellat eos, ea harum aliquid! Libero porro, dolorum illo quae modi aliquam dignissimos ipsum ab recusandae accusantium quisquam architecto magnam veritatis facilis non debitis? Omnis odit molestias numquam dolorum hic sequi labore illum? Asperiores nisi aperiam unde, aspernatur natus minus exercitationem nam corrupti totam ullam nobis doloribus sed odio rem aut quaerat, eveniet non ipsa, vel ab temporibus alias magnam pariatur. Laudantium fugit error praesentium expedita, cupiditate nemo illo itaque unde sequi magni quos, est quo illum voluptate eius quod similique. Culpa blanditiis aspernatur, numquam, pariatur, deleniti corporis accusamus voluptatem quisquam dolores maxime facilis maiores alias modi dolore? Quod tempora iure ducimus eaque quasi, qui reprehenderit voluptatem inventore ut deleniti enim facere eveniet tempore laudantium magni recusandae reiciendis ipsa optio neque tenetur. Commodi, numquam, ad nam tempore perspiciatis et animi culpa nihil necessitatibus iste neque blanditiis soluta sunt laboriosam a mollitia ratione unde dolores suscipit iusto itaque error non sequi dolorem. Dolores nihil nisi qui, fugiat veritatis nemo reiciendis cupiditate ea impedit odit dolorum eum perspiciatis quisquam laboriosam optio quia libero doloribus odio. Perspiciatis, neque ullam doloribus exercitationem quo corrupti expedita adipisci officia? Accusantium laborum recusandae perspiciatis placeat eveniet adipisci, est non explicabo, perferendis iste, et quaerat libero itaque velit unde sapiente officiis tenetur praesentium numquam commodi! Vero veritatis reiciendis velit odit. Ducimus?
                    </div>
                    <div className="section mt-64" id="about">
                        About:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, molestiae quos tempore nisi odit, similique ex eos cupiditate earum explicabo officia debitis quibusdam nam laudantium quo qui voluptatem aliquid rerum? Dolorem, iste. Assumenda pariatur labore voluptatibus temporibus quidem reprehenderit accusamus aliquid possimus, doloremque cum distinctio sapiente saepe repudiandae quaerat dolorum hic repellendus reiciendis magni. Impedit possimus debitis, quis dolores voluptatibus ipsa sit perferendis voluptatem, laudantium fugit sequi cumque quibusdam sint. Autem voluptas enim dolore repudiandae ad voluptatibus nemo optio. Natus rerum asperiores quos ducimus, voluptas ipsum libero! Quod, culpa doloremque corrupti consequuntur eveniet ex dolore error sint est voluptas amet facilis ad perspiciatis vitae tenetur, tempora eum nisi. Fugiat ullam, tempora quisquam omnis sint atque molestiae minima deserunt? Omnis temporibus pariatur facilis ad expedita saepe magnam eos voluptate, natus dolore, tempora iure optio nisi voluptates accusamus quasi. Fugiat sapiente similique iusto nostrum nobis alias reiciendis quae aut sed facilis placeat, accusantium in dolorum laudantium ipsa laboriosam sequi excepturi! Quae iure ea ipsa error esse fugit nostrum voluptas, iusto eaque cumque sapiente eos consequuntur asperiores deserunt repellendus rerum ut modi, perferendis a aut? Voluptatibus amet quibusdam veritatis ipsa, cupiditate nisi in recusandae laboriosam perferendis rem aperiam laudantium voluptates aliquid placeat quisquam cum a blanditiis vero nihil cumque soluta facere qui voluptatum. Placeat voluptates incidunt reprehenderit odio laborum eos ipsa, optio earum laudantium voluptatum provident aliquid! Asperiores ad, amet facere quaerat necessitatibus reprehenderit consequuntur. Autem impedit nihil nostrum ad amet quia tempora alias adipisci praesentium aspernatur, a quaerat ipsum atque, animi mollitia laborum molestiae doloremque totam voluptatum. Aliquam est accusantium labore at quas a dolor voluptatem tempore omnis quam odio expedita vitae sit minima minus sequi vero nam rem enim, incidunt, voluptatum molestias ipsa! Voluptatem esse eum aperiam atque vitae ex aspernatur sit delectus sed minima. A reiciendis natus illo ab quisquam.
                    </div>
                    <div className="section mt-64" id="contact">
                        Contact:Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit vero quidem rerum, doloremque vel perferendis? Debitis explicabo pariatur praesentium. Doloremque quas, sequi pariatur veniam explicabo possimus repellat error commodi natus non voluptatem voluptas dolorum aliquid distinctio ut necessitatibus in delectus? Quisquam id magnam aliquam, repellendus labore modi quaerat fugiat voluptas esse placeat quasi eligendi eaque qui animi. Enim, aliquam accusamus, cupiditate reprehenderit veniam unde, adipisci ea incidunt debitis minus eveniet ducimus. Beatae unde repudiandae mollitia vero reiciendis dolorum magnam, laboriosam facilis non, sint minus molestias incidunt totam nihil, at officia minima modi sit quasi quia. Natus atque cumque repellat cum animi, voluptate earum suscipit quas! Dicta deleniti quae tempora natus eum quo totam iusto, nemo repellendus, voluptatem magni architecto! Alias quibusdam aliquid recusandae, dolor hic, tempora incidunt neque adipisci dolore corporis molestias blanditiis facere! Numquam ab aliquid aspernatur in, consectetur quasi repellendus. Culpa aliquid voluptatum ad, cum nisi nesciunt consectetur libero commodi laudantium laboriosam placeat officia doloribus, maxime nobis delectus ex aspernatur atque, praesentium sint recusandae minus. Quos, ipsam! Et quia quaerat eius aspernatur repellat deserunt reiciendis maxime cumque ad expedita voluptatum quo facilis impedit illo vel sint suscipit porro labore iusto obcaecati omnis mollitia sit, recusandae quos. Debitis maxime doloremque illo sint hic, veniam unde qui nulla quisquam similique odit dolore numquam architecto molestiae corporis a nihil autem error? Voluptatibus quam architecto rem ex atque provident qui veritatis explicabo numquam quibusdam ullam saepe quia deleniti, consequuntur iste, eligendi dicta quaerat adipisci reiciendis voluptate a maxime modi iusto! Voluptatem eaque dicta nam voluptatibus ad quo, incidunt rem deserunt tempore laudantium iste tenetur cumque quidem, fuga quae dolores, qui suscipit in unde labore cupiditate! Animi nobis, mollitia explicabo, voluptas vero dolores eligendi temporibus eos praesentium hic voluptates nisi eveniet tempore veniam impedit neque illo iusto aliquid libero ab ducimus! Tempora!
                    </div>
                    <div className="section mt-64" id="lessons">
                        Lessons:Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam rerum temporibus velit. Repellat, incidunt corporis doloribus nihil aperiam numquam praesentium blanditiis consequatur sint in laudantium aut ipsum nam quo tenetur quibusdam. Amet aut, possimus, doloremque vel rerum hic voluptas ut consectetur reprehenderit explicabo labore sint vero accusantium asperiores? Repellat rerum vel voluptate. Molestias expedita, provident temporibus recusandae cupiditate corporis itaque inventore vel eius excepturi facere tempore nostrum. Id quia sint eius ullam molestias iusto ab, laudantium repellendus! Voluptas quod incidunt voluptatum dicta vitae nemo est quidem blanditiis perspiciatis voluptates eos odit, natus laborum asperiores beatae ad pariatur eveniet ipsa totam sed et autem voluptatem inventore. Quibusdam eius doloremque officia iste modi beatae, sed magni quia? Aperiam saepe animi quaerat ad inventore labore harum sapiente et, tempora perferendis, officiis doloribus doloremque illum ratione quibusdam, minima molestias! Ipsa ex dolor hic adipisci corrupti dolorum obcaecati fuga laudantium aliquam possimus, ducimus expedita consectetur temporibus. Non repellat saepe deleniti consequatur distinctio id, temporibus quam cupiditate expedita exercitationem, illo libero culpa autem nobis totam, beatae reprehenderit! Repudiandae consectetur a quia obcaecati nobis iure asperiores reiciendis, sed doloribus dicta, aliquid odit quidem fugiat ex? Impedit possimus at ullam voluptas cupiditate, non voluptatem sed laborum asperiores molestiae atque, iure architecto reprehenderit voluptate nemo magnam quas aperiam repudiandae, minima voluptatibus? Nemo suscipit doloribus velit delectus reprehenderit perferendis, nobis amet aliquam odit recusandae aspernatur dolor sequi doloremque! Necessitatibus excepturi atque iusto cupiditate ipsa, doloremque facilis vitae dolor architecto sed velit accusamus illum at perspiciatis culpa ea minima esse ducimus alias sint eius veniam explicabo dicta nobis! Suscipit nihil dolores sint ut. Iste unde incidunt eum porro magni quia esse recusandae voluptatibus earum quibusdam! Sapiente repellendus placeat aut voluptates non quia minus hic rem quod doloribus possimus, labore impedit deserunt commodi perspiciatis molestias laboriosam vel dolorum delectus nulla fuga.
                    </div>
                </div>
            )}

            <div className="w-full bg-blue-900 flex flex-wrap-reverse text-right" >
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>


            <Footer></Footer>
        </div>
    );
}
