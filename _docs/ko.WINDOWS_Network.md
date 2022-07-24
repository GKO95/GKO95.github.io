---
layout: docs
category: 윈도우
title: 네트워크
slug: ko.Network
order: null
---
# 네트워크: 기초

## 패킷
[네트워크 패킷](https://ko.wikipedia.org/wiki/네트워크_패킷)(network packet), 간단히 패킷(packet)은 패킷 교환 네트워크를 통해 전송되기 위한 형태를 갖춘 데이터이다. 제어 정보와 사용자 데이터로 구성되어 있는데, 전자는 일반적으로 패킷의 헤더 혹은 푸터에서 찾을 수 있으며 후자는 페이로드(payload)라고도 칭한다.

## 노드
[노드](https://ko.wikipedia.org/wiki/노드_(네트워크))(node)는 데이터 통신 네트워크에서 재분배 지점 혹은 통신 도착점(endpoint)이다. 컴퓨터 네트워크에서 물리적 네트워크 노드는 둘 중 하나로 분류된다.

* [데이터 통신 장치](https://ko.wikipedia.org/wiki/데이터_회선_종단_장치)(data communication equipment; DCE)
    : 데이터 전송 회로와 데이터 단말 장치 사이에 위치하여 신호 변환, 오류 정정, 클락 등의 기능을 제공한다 (예. 모뎀, 스위치 등).

* [데이터 단말 장치](https://ko.wikipedia.org/wiki/데이터_단말_장치)(data terminal equipment; DTE)
    : 사용자 정보를 신호로 변환 혹은 그 반대를 수행하는 장치이다 (예. 프린터, 호스트 컴퓨터 등).

컴퓨터 네트워크가 LAN 혹은 WAN일 경우, 데이터 전송에 임하는 모든 노드들은 반드시 네트워크 주소를 갖고 있어야 한다 (일반적으로 [NIC](https://ko.wikipedia.org/wiki/네트워크_인터페이스_컨트롤러) 당 하나씩). 인터넷 혹은 인트라넷일 경우, 대다수 물리적 네트워크 노드는 IP 주소로 식별되는 호스트 컴퓨터이다.

### 호스트
[호스트](https://ko.wikipedia.org/wiki/호스트_(네트워크))(host)란, 컴퓨터 네트워크에 연결된 컴퓨터 혹은 기타 장비로써 사용자가 서버(server)나 클라이언트(client)로 활용하는 노드이다.

> 설명에서도 파악할 수 있듯이 모든 서버는 호스트이지만, 모든 호스트는 서버가 아니다 (클라이언트일 수도 있기 때문이다).

여기서 서버(server)는 타 호스트에게 리소스를 제공하는 역할을 맡는 호스트이다.

# 네트워크: 인프라
> *참조: [How the Internet Works, Part I - The Internet Infrastructure](https://vahid.blog/post/2020-12-15-how-the-internet-works-part-i-infrastructure/)*

## 근거리 통신망
[근거리 통신망](https://ko.wikipedia.org/wiki/근거리_통신망)(local area network; LAN)은 가정이나 학교, 연구실 혹은 회사와 같은 제한된 공간에서 컴퓨터 간 연결하는 네트워크이다. [이더넷](https://ko.wikipedia.org/wiki/이더넷)(Ethernet)과 [와이파이](https://ko.wikipedia.org/wiki/와이파이)(Wi-Fi)가 대표적인 LAN 기술이다.

### 스위치
[네트워크 스위치](https://ko.wikipedia.org/wiki/네트워크_스위치)(network switch), 혹은 간단히 스위치(switch)는 장치들을 하나의 네트워크, 즉 LAN에 연결해주는 하드웨어 장치이다. 일반 가정용 공유기에 연결된 컴퓨터가 연결된 또 다른 장치들을 홈 네트워크에서 찾을 수 있는 것도 기본적으로 스위치 기능이 탑재되어 있기 때문이다.

## 광역 통신망
[광역 통신망](https://ko.wikipedia.org/wiki/광역_통신망)(wide area network)은 컴퓨터 네트워크 연결을 지리적 한계로부터 극복하는 광범위 통신 네트워크이다. 하지만 통신 프로토콜의 활용과 개념적인 관점에서 WAN은 장거리 데이터 전송 외에도 다른 네트워크 간 연결하는 네트워킹 기술로 보는 게 적합하다.

> 즉, 인터넷은 WAN의 하나로 간주될 수 있다.

대부분의 WAN은 조직이나 회사 전용 네트워크로 구축되어 매우 개인적이다. 반면, 대한민국 3대 통신사와 같은 인터넷 서비스 제공자(Internet service provider; ISP)는 사용자의 LAN을 인터넷에 연결하는 서비스를 제공하기 위한 상업적 목적으로 WAN을 구축한다.

### 모뎀
[모뎀](https://ko.wikipedia.org/wiki/모뎀)(modem; modulator-demodulator)은 인터넷 데이터를 통신을 위해 [변조](https://ko.wikipedia.org/wiki/변조)(modulated)된 아날로그 [반송파](https://ko.wikipedia.org/wiki/반송파)(carrier wave)로부터 장치에서 사용하도록 디지털 신호로 [복조](https://ko.wikipedia.org/wiki/복조)(demodulate), 혹은 그 반대를 수행하는 컴퓨터 하드웨어이다. ISP의 WAN은 사회적 인프라로 매설된 전화선이나 동축 및 광섬유 케이블로부터 사용자에게 접근성을 제공하는데, 모뎀은 가정이나 시설에서 구축된 LAN을 ISP의 WAN에 연결하여 인터넷을 사용할 수 있도록 한다.

### 라우터
[라우터](https://ko.wikipedia.org/wiki/라우터)(router), 일명 공유기는 컴퓨터 네트워크 간에 데이터 패킷을 전송하는 네트워킹 장치이다. 데이터 패킷을 수신받으면 헤더에 들어있는 네트워크 주소 정보를 읽어 최종 목적지를 파악하여 라우팅 테이블(routing table) 또는 라우팅 정책(routing policy)에 따라 패킷 전송을 안내한다.

흔히 접하는 [가정용 공유기](https://en.wikipedia.org/wiki/Residential_gateway)(residential gateway)도 라우터의 하나이며, 모뎀을 거쳐서 수신받은 인터넷 데이터 패킷을 공유기에 연결된 어느 장치에 전달할지 결정한다.

### 게이트웨이
[게이트웨이](https://ko.wikipedia.org/wiki/게이트웨이)(gateway)는 통신 데이터를 하나의 네트워크에서 다른 네트워크로 흐르게 하도록 사용되는 하드웨어 혹은 소프트웨어이다. 간단히 말해, 게이트웨이는 모뎀(*WAN과 LAN을 연결*)과 라우터(*패킷을 목적지로 안내*)의 기능을 하나로 통합한 장치이다.

> 본문은 가정용 공유기의 영문을 "residential gateway"라고 표기하였다; 일부 가정용 공유기는 모뎀을 거치지 않고 직접 WAN에 연결하여 인터넷에 접속할 수 있기 때문이다.

# 네트워크: TCP/IP
[인터넷 프로토콜 스위트](https://ko.wikipedia.org/wiki/인터넷_프로토콜_스위트)(Internet protocol suite), 일명 TCP/IP는 인터넷 및 유사 컴퓨터 네트워크에서 사용하는 통신 프로토콜이며, *전송 제어 프로토콜(TCP)* 및 *인터넷 프로토콜(IP)*의 조합을 가리킨다. TCP/IP 개발은 미국 국방부에서 투자한 "전송 제어 프로그램(Transmission Control Program)"로부터 시작되었으며, 초창기에는 [연결지향형](https://en.wikipedia.org/wiki/Connection-oriented_communication)(connection-oriented) 데이터그램 프로토콜 구현을 목표로 하였다.

> 결론부터 말하자면, [비연결형](https://en.wikipedia.org/wiki/Connectionless_communication)(connectionless) 성질을 갖는 데이터그램을 연결지향형으로 만드는 자체가 난해한 과제였다. 결국 전송 제어 프로그램은 두 개의 프로토콜로 나뉘어지는데, 바로 연결지향형의 TCP와 비연결형 IP이다.

## 인터넷 프로토콜
[인터넷 프로토콜](https://ko.wikipedia.org/wiki/인터넷_프로토콜)(Internet Protocol; IP)는 데이터그램의 인터네트워크 통신을 가능케 하도록 패킷 구조를 정의하는 프로토콜이다. 일반적으로 패킷은 출발지 및 목적지 정보 등이 담겨있는 헤더(header), 그리고 데이터 혹은 상위 계층의 프로토콜을 캡슐화한 [페이로드](https://ko.wikipedia.org/wiki/페이로드_(컴퓨팅))(payload)로 구성된다. 특히 캡슐화(encapsulation)는 국지적으로 사용되는 로컬 네트워크 프로토콜을 공통 인터네트워크 프로토콜에 숨기므로써 네트워크 장벽 너머 전송되어 사용할 수 있도록 한다.

![IP의 네트워크 계층 패킷 구조<sub><i>출처: <a href="https://commons.wikimedia.org/wiki/File:UDP_encapsulation.svg">위키미디어</a></i></sub>](/images/docs/network/network_udp_encapsulation.svg)

### 링크 계층
링크 계층(link layer)은 IP 네트워크 최하위 계층으로써 두 장치의 연결(예. 클라이언트와 서버)에 가담하며, PDU는 "프레임(frame)"이다. 장치 간의 연결에서는 패킷을 송수신할 수 있는 물리적 하드웨어가 주되며, 프레임은 다음과 같이 구성된다.

| 프레임 | 설명 |
|:---:|----|
| Header | 출발지 및 도착지 MAC 주소 그리고 페이로드의 크기 정보를 포함한다. |
| Payload | 캡슐화된 인터넷 계층의 PDU인 "패킷"을 갖는다. |
| Footer | [Frame check sequence](https://en.wikipedia.org/wiki/Frame_check_sequence)(FCS)로 데이터 손실이나 간섭으로 인한 손상을 [checksum](https://ko.wikipedia.org/wiki/체크섬)으로 검사한다.<br/>프레임을 수신받은 NIC에서 계산된 checksum이 FCS와 일치하지 않으면 손상된 것으로 간주하여 버려진다. |

### 인터넷 계층
인터넷 계층(internet layer)은 라우터를 통한 두 네트워크의 연결(예. LAN과 WAN)에 가담하며, PDU는 "패킷(packet)"이다. IP가 본격적으로 작용하는 계층이면서도 네트워크 간 이동이 발생하기 때문에 가장 활발한 계층이기도 한다. 해당 계층에서 주로 사용되는 프로토콜은 IPv 버전 4와 6, 일명 IPv4 및 IPv6이다. 이전에는 IPv4로 할당할 수 있는 32비트 주소로도 충분하였으나, 네트워크 장치 개수가 많아지면서 128비트 주소를 할당하는 IPv6로 전환되고 있다.

> IP 주소가 아닌 MAC 주소로 목적지를 찾는 것은 비효율적이다. MAC는 NIC 하드웨어에 기입된 주소이지만, 하드웨어가 변경되면 MAC 주소도 바뀌게 된다. 또한 타 네트워크에 있는 장치들은 동일한 MAC 주소를 가질 수 있다.

라우터가 링크 계열의 PDU인 프레임을 열어 패킷을 읽고 목적지 IP 주소까지 안내한다. 라우터가 읽는 패킷 정보는 다음 내용들로 구성된다.

| 패킷 | 설명 |
|:---:|----|
| Header | 출발지 및 도착지 IP 주소, 전송 계층의 프로토콜 종류, TTL(혹은 홉 제한) 정보를 포함한다. |
| Payload | 캡슐화된 전송 계층의 PDU인 "데이터그램" 혹은 "세그먼트"를 갖는다. |

여기서 [TTL](https://ko.wikipedia.org/wiki/Time_to_live)(Time to live)이란, 라우터를 통해 다음 네트워크 세그먼트로 넘어가는 [홉](https://ko.wikipedia.org/wiki/홉_(네트워크))(hop) 횟수를 제한시키는 역할을 한다. 이를 통해 패킷이 라우터를 거치며 목적지 주소까지 도달하지 못하고 떠돌면서 쓸데없이 통신 대역을 낭비하는 것을 방지한다. 매 홉마다 라우터는 TTL을 차감하고, 0이 되면 패킷은 손실된다. IPv6에서는 이를 홉 제한(hop limit)이라고 부른다.

### 전송 계층
전송 계층(transport layer)은 패킷이 라우터 안내를 받아 목적지 주소의 호스트에 도착했을 떄, 호스트 내에서 어느 [프로세스](/docs/ko.Process#프로세스)에 통신을 전할지 [포트](https://ko.wikipedia.org/wiki/포트_(컴퓨터_네트워킹))(port)와의 연결에 가담하는 계층이다. 전송 계층의 PDU는 패킷 헤더에 명시된 전송 계층 프로토콜 종류에 따라 "데이터그램(datagram)" 혹은 "세그먼트(segment)"로 나뉜다.

> [UDP](#사용자-데이터그램-프로토콜) 및 [TCP](#전송-제어-프로토콜)에 대한 설명은 본 장의 별도 부문에서 설명한다.

* 다중화(multiplexing)
    : *IP 주소로 패킷을 보내기 전에 각 포트의 데이터그램 및 세그먼트를 모두 거두어 하나의 패킷 페이로드로 캡슐화하는 작업이다.*

* 역다중화(demultiplexing)
    : *수신받은 패킷으로부터 각 데이터그램과 세그먼트를 올바른 포트로 전달하는 작업이다.*

### 응용 계층
응용 계층(application layer)은 IP 네트워크 최상위 계층으로 포트를 통해 어플리케이션 프로세스에 전달할 통신 내용이 담긴 계층이다. 응용 계층의 PDU인 "메시지(message)"는 목적이나 프로토콜에 따라 다양한 구성과 데이터가 들어있을 수 있다. 대표적인 예시로 HTTP, DNS, TLS 등이 있다.

## 사용자 데이터그램 프로토콜
[사용자 데이터그램 프로토콜](https://ko.wikipedia.org/wiki/사용자_데이터그램_프로토콜)(User Datagram Protocol; UDP)은 인터넷 프로토콜 스위트에서 사용하는 핵심 전송 프로토콜 중 하나로, UDP의 데이터 단위는 [데이터그램](https://en.wikipedia.org/wiki/Datagram)(datagram)이다.

> 데이터그램이란, 이전 교환에 의존하지 않고서 출발지로부터 목적지까지 도달할 수 있는 충분한 데이터를 지닌 자립적이고 독립적인 존재이다.

UDP의 데이터그램 구성은 다음과 같다:

| 데이터그램   | 설명                                                 |
|:-------:|----------------------------------------------------|
| Header  | 출발지 및 도착지 포트 (혹은 소켓), 데이터그램 크기, checksum 정보를 포함한다. |
| Payload | 캡슐화된 응용 계층의 PDU인 "메시지"를 갖는다.                       |

위의 데이터그램 정의를 통해 UDP의 성질을 파악할 수 있다.

* 비신뢰성(unreliable)
    : *데이터그램은 오로지 목적지에 대한 정보를 제공하며, 도달할 보장이 없으며 수신받았음을 확인할 수 없다.*

* 비연결형(connectionless)
    : *데이터그램은 전송 경로를 확립되지 않은 채로 송신된다.*

하지만 오히려 UDP의 간단한 구조는 오류 검증 및 정정을 처리하는 비중이 적어 속도가 빠른 장점이 있다. 그러한 이유로 UDP는 화상통화와 같은 실시간 서비스 시스템에서 선호된다.

## 전송 제어 프로토콜
[전송 제어 프로토콜](https://ko.wikipedia.org/wiki/전송_제어_프로토콜)(Transmission Control Protocol; TCP)는 인터넷 프로토콜 스위트에서 사용하는 핵심 전송 프로토콜 중 하나이다. 두 호스트 간 데이터 교환이 이루어지기 전에 확고한 연결을 우선적으로 수립하여 안정적인 통신을 보장하는 연결지향형(connection-oriented)을 지원하므로써 초창기 IP 설계를 보완한다.

> 결론적으로 TCP/IP는 IP 네트워크 계층 프로토콜로 정의된 패킷 구조에 TCP 전송 프로토콜을 사용하는 것을 가리킨다.

TCP가 안정적인 통신 연결을 확립하기 위해서 [handshake](https://ko.wikipedia.org/wiki/핸드셰이킹)를 다음 세 단계를 거쳐 진행한다.

1. 클라이언트 → 서버
    : *페이로드가 없는 bodyless `SYN` 플래그의 세그먼트를 서버로 송신한다.*

2. 서버 → 클라이언트
    : *수신받은 서버는 bodyless `SYN | ACK` 플래그의 세그먼트로 클라이언트에게 응답한다.*

3. 클라이언트 →  서버
    : *수신받은 클라이언트는 bodyless `ACK` 플래그의 세그먼트로 서버에게 응답한다.*

TCP의 데이터 단위는 [세그먼트](https://ko.wikipedia.org/wiki/전송_제어_프로토콜#TCP_세그먼트_구조)(segment)이며, 이는 응용 계층의 메시지를 여러 개로 쪼개어 별도의 패킷으로 전송될 수 있기 때문이다.

| 세그먼트   | 설명                                                 |
|:-------:|----------------------------------------------------|
| Header  | 출발지 및 도착지 포트 (혹은 소켓), 시퀀스 번호, 플래그, 윈도우 크기, checksum 등의 정보를 포함한다. |
| Payload | 캡슐화된 응용 계층의 PDU인 "메시지"를 갖는다.   |

방대한 양의 데이터를 처리할 수 있도록 하며, 세그먼트 헤더의 `Sequence #`로부터 메시지의 몇 번째 세그먼트(조각)인지 식별이 가능하다. 해당 시퀀스의 세그먼트를 수신받은 서버는 대응하는 `Acknowledgement #`로 응답한다. 클라이언트는 응답으로 돌아온 `Acknowledgement #`들을 모두 취합하여 세그먼트가 전부 목적지에 도달하였는지 판단한다. 만일 모든 세그먼트가 도달한 것을 확인하였으면 `SYN` 대신 `FIN` 플래그로 치환한 TCP handshake 절차를 진행한다.
