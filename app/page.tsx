import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex-grow">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url('/images/gambar_coding.jpg')",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Website Andal untuk Bisnis Anda
              </h1>
              <p className="mb-5">
                Saya membuat website modern, cepat, dan ramah pengguna untuk
                UMKM maupun bisnis berkembang, agar lebih dipercaya pelanggan
                dan tampil unggul di dunia digital.
              </p>
              <button className="btn btn-primary mr-2.5">
                Paket Harga Website
              </button>
              <button className="btn btn-primary btn-outline ml-2.5 text-white">
                Kontak Saya
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-base-300 p-10">
        <div className="flex p-10">
          <div className="w-1/2 lg:ml-10">
            <Image
              src="/images/coding_illustration.png"
              width={500}
              height={500}
              alt="Ilustrasi Coding"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-4xl mb-10 font-bold">
              Solusi Website untuk Bisnis Anda
            </h2>
            <p className="text-xl">
              Saya menyediakan layanan pembuatan website yang simpel, cepat, dan
              terjangkau. Website yang saya buat tidak hanya terlihat
              profesional, tetapi juga mudah digunakan dan responsif di berbagai
              perangkat. Dengan begitu, bisnis Anda dapat tampil lebih
              meyakinkan, menjangkau lebih banyak pelanggan, dan meningkatkan
              kepercayaan secara online.
            </p>
            <button className="btn btn-primary mt-10 btn-wide p-8 text-lg">
              Tentang Saya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="p-10">
        <h2 className="text-4xl p-2.5 text-center font-bold">
          Hasil Karya Saya
        </h2>
        {/* Anak Section */}
        <div className="flex p-10">
          <div className="flex w-full">
            <div className="w-1/2 ">
              <p className="text-xl">
                Setiap website yang saya buat adalah hasil dari perhatian
                terhadap detail, keindahan desain, dan kebutuhan bisnis klien.
                Di sini Anda bisa melihat beberapa proyek yang telah saya
                kerjakan, mulai dari website bisnis kecil hingga website
                personal yang modern dan fungsional.
              </p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card bg-base-100 w-1/2 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Project Babibu</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary btn-outline mt-5">
                    Cek Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-10 bg-base-300 ">
        <h2 className="text-4xl p-2.5 text-center font-bold">
          Keunggulan Website Saya
        </h2>
        {/* Anak Section */}
        <div>
          {/* Baris 1*/}
          <div className="flex justify-between p-5">
            {/* Card 1 */}
            <div className="card bg-base-100 w-96 shadow-sm m-3">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title sm:text-sm">Mudah Digunakan</h2>
                <p>Website nyaman dan gampang dipahami oleh siapa saja.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card bg-base-100 w-96 shadow-sm m-3">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title sm:text-sm">
                  Tampil Bagus di HP & Laptop
                </h2>
                <p>
                  Responsif di semua perangkat, dari smartphone sampai komputer.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card bg-base-100 w-96 shadow-sm m-3">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title sm:text-sm">
                  Desain Menarik & Profesional
                </h2>
                <p>
                  Cocok dengan identitas bisnis Anda, enak dipandang, dan
                  membuat pelanggan betah.
                </p>
              </div>
            </div>
          </div>
          {/* Baris 2 */}
          <div className="flex justify-between p-5">
            {/* Card 1 */}
            <div className="card bg-base-100 w-96 shadow-sm m-3">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title sm:text-sm">Mudah Digunakan</h2>
                <p>Website nyaman dan gampang dipahami oleh siapa saja.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card bg-base-100 w-96 shadow-sm m-3">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title sm:text-sm">
                  Tampil Bagus di HP & Laptop
                </h2>
                <p>
                  Responsif di semua perangkat, dari smartphone sampai komputer.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card bg-base-100 w-96 shadow-sm m-3">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title sm:text-sm">
                  Desain Menarik & Profesional
                </h2>
                <p>
                  Cocok dengan identitas bisnis Anda, enak dipandang, dan
                  membuat pelanggan betah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
