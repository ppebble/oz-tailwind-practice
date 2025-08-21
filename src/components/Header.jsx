export default function Header() {
	return (
		<header className='flex justify-between items-center p-3 md:p-5 bg-black text-white'>
			<h2 className='text-lg md:text-xl font-bold'>OZ코딩스쿨</h2>
			<ul className='flex justify-center items-center gap-3 md:gap-5'>
				<li className='list-none text-xs md:text-sm font-normal'>로그인</li>
				<li className='list-none text-xs md:text-sm font-normal'>회원가입</li>
				<li className='list-none text-xs md:text-sm font-normal'>내클래스</li>
			</ul>
		</header>
	);
}
