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
      {/* Section 1 */}
      <section className="bg-base-300 p-10">
        <div className="flex flex-wrap justify-evenly p-10 gap-2">
          {/* Section 1 Gambar */}
          <div>
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
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="p-10">
        <h2 className="text-4xl p-2.5 text-center font-bold">
          Hasil Karya Saya
        </h2>
        {/* Section 2 Container */}
        <div className="p-10 gap-10 flex justify-evenly flex-wrap lg:flex-nowrap">
          {/* Section 2 Container 1 */}
          <div className="w-1/2">
            <p className="text-xl">
              Setiap website yang saya buat adalah hasil dari perhatian terhadap
              detail, keindahan desain, dan kebutuhan bisnis klien. Di sini Anda
              bisa melihat beberapa proyek yang telah saya kerjakan, mulai dari
              website bisnis kecil hingga website personal yang modern dan
              fungsional.
            </p>
          </div>
          {/* Container 2 Section 2 */}
          <div className="card bg-base-100 shadow-sm w-96 lg:w-1/2">
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
      </section>
      {/* Section 3 */}
      <section className="p-10 bg-primary ">
        {/* Section Header  */}
        <h2 className="text-4xl p-2.5 text-center font-bold">
          Keunggulan Website Saya
        </h2>
        {/* Anak Section */}
        <div>
          {/* Baris 1*/}
          <div className="flex justify-evenly p-5 gap-5 flex-wrap">
            {/* Card 1 */}
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <Image
                  src="/images/easy_to_use.png"
                  width={500}
                  height={500}
                  alt="Easy to Use"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title sm:text-sm">Mudah Digunakan</h2>
                <p>Website nyaman dan gampang dipahami oleh siapa saja.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <Image
                  src="/images/responsive_design.jpg"
                  width={500}
                  height={500}
                  alt="Easy to Use"
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
            <div className="card bg-base-100 w-96 shadow-sm">
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
            {/* Card 4 */}
            <div className="card bg-base-100 w-96 shadow-sm">
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
            {/* Card 5 */}
            <div className="card bg-base-100 w-96 shadow-sm">
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
            {/* Card 6 */}
            <div className="card bg-base-100 w-96 shadow-sm">
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
      {/* Section 4 */}
      <section className="p-10">
        <div className="divider divider-primary">
          <h2 className="text-center font-bold text-4xl">Harga Website</h2>
        </div>
        {/* Pricing Card Container */}
        <div className="flex justify-evenly">
          {/* Card 1 */}
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-xl">$29/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Batch processing capabilities</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>AI-driven image enhancements</span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Seamless cloud integration
                  </span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Real-time collaboration tools
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-xl">$29/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Batch processing capabilities</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>AI-driven image enhancements</span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Seamless cloud integration
                  </span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Real-time collaboration tools
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-xl">$29/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Batch processing capabilities</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>AI-driven image enhancements</span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Seamless cloud integration
                  </span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Real-time collaboration tools
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5 - CTA / Kontak */}
      <section className="p-10 bg-base-200 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Siap Membuat Website Impian Anda?
          </h2>
          <p className="text-lg mb-8">
            Isi form di bawah ini untuk konsultasi gratis. Harga bisa
            dinegosiasikan sesuai kebutuhan Anda.
          </p>

          {/* Form Kontak */}
          <form className="space-y-4 text-left">
            {/* Nama */}
            <div>
              <label className="block mb-2 font-semibold">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Pesan */}
            <div>
              <label className="block mb-2 font-semibold">Pesan</label>
              <textarea
                placeholder="Tulis pesan Anda"
                className="textarea textarea-bordered w-full"
                rows={4}
                required
              ></textarea>
            </div>

            {/* Tombol Submit */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-wide">
                Kirim Pesan
              </button>
            </div>
          </form>

          {/* Kontak Langsung */}
          <div className="mt-8">
            <p className="mb-4 font-semibold">Atau hubungi saya langsung:</p>
            <div className="flex justify-center gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281234567890?text=Halo, saya tertarik dengan jasa pembuatan website. Apakah bisa saya dapatkan penawaran?"
                target="_blank"
                className="btn btn-success btn-outline w-28"
              >
                WhatsApp
              </a>

              {/* Email */}
              <a
                href="mailto:emailanda@example.com?subject=Permintaan%20Website&body=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website.%20Apakah%20bisa%20saya%20dapatkan%20penawaran?"
                className="btn  btn-outline w-28"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
