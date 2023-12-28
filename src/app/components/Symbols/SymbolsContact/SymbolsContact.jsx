import Image from "next/image"

export default function SymbolsContact() {
  return (
    <>
        <div className="blueSymbol">
            <Image
            src="/symbols/blueSymbol.png"
            alt='Persistence symbol'
            height={280}
            width={280}
            />
        </div>
        <div className="yellowSymbol">
            <Image
                src="/symbols/yellowSymbol.png"
                alt='Resistence symbol'
                height={445}
                width={445}
            />
        </div>
        <div className="whiteSymbol">
            <Image
                src="/symbols/whiteSymbol.png"
                alt='Avenge symbol'
                height={330}
                width={330}
            />
        </div>
    </>
  )
}
