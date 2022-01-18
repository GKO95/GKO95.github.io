---
layout: docs
language: ko
category: 운영체제
title: 네트워크
meta: Network
order: null
---
# 네트워크: 기초

## 패킷
[네트워크 패킷](https://ko.wikipedia.org/wiki/네트워크_패킷)(network packet), 간단히 패킷(packet)은 통신 및 컴퓨터 네트워크에서 

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

## Internetworking
여러 컴퓨터 네크워크를 연결하는 것; 사용하는 하드웨어 측면의 네트워크 연결 기술에 개의치 않고 네트워크 연결된 네트워크의 호스트 간에 메시지를 주고 받을 수 있도록 한다.

오늘날 네트워크 간을 연결하는 게이트웨이를 Router라고 부른다.

그렇게 상호연결된 네트워크 시스템을 인터네트워크(internetwork) 혹은 간단히 인터넷(internet)이라 부른다. 가장 대표적인 예시로 네트워크들의 네트워크인 인터넷(Internet)이 있다.

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
[인터넷 프로토콜 스위트](https://ko.wikipedia.org/wiki/인터넷_프로토콜_스위트)(Internet protocol suite), 일명 TCP/IP

## IP
Internet Protocol은 네트워크 상에서 datagram을 전달하기 위한 인터넷 프로토콜 suite의 네트워크 계층 통신 프로토콜이다.

> datagram은 패킷 교환 네트워크에서 가장 기본적인 전송 단위이다. 헤더와 payload로 구성된다.

### 패킷 교환
[패킷 교환](https://ko.wikipedia.org/wiki/패킷_교환)(packet switching)은 디지털 네트워크에 전송될 패킷으로 데이터를 그룹화시키는 방법이다. 패킷은 header와 payload로 구성된다. Header에 있는 데이터는 네트워크 하드웨어에서 패킷을 목적지로 도달할 수 있게 안내하는데 사용된다. 그리고 패킷에서 추출된 payload는 운영체제, 어플리케이션 등에서 사용된다.

### MAC
MAC(medium access control; 매체 접근 제어)은 유선, 무선, 혹은 광학 매질(transmission medium)과 상호작용을 담당하는 하드웨어를 제어하는 하위계층이다. 대표적인 하드웨어가 바로 Network Interface Controller(NIC)로, 네트워크 노드를 설명할 때 이들은 각자 주소를 갖는다고 하였는데 그것이 바로 MAC address이다. 이들은 장치 제조사로부터 부여받은 고유 주소로(그래서 일명 burned-in address, hardware address 혹은 physical address라고도 부름) 총 여섯 개의 바이트로 표현된다. 최근은 MAC address 수정을 지원하는 편이다. 동일한 네트워크에서는 MAC address는 고유해야 하지만, 서로 다른 네트워크에서는 같은 MAC address를 가질 수 있다.



## Link Layer
Link는 두 장치의 연결을 가리킨다.

Link Layer는 송신 장치 및 수신 장치 정보(MAC 주소), 그리고 SDU(여기서는 Internet Layer의 PDU인 패킷)를 갖는다. 즉, 노드 간 연결에 대한 정보가 위주이다.

프로토콜 데이터 단위(PDU)는 프레임

- 프레임 헤더는 출발 및 도착 MAC 주소, payload 길이에 대한 정보를 갖는다.
- 프레임 푸터는 [Frame check sequence](https://en.wikipedia.org/wiki/Frame_check_sequence)(FCS)가 있어 데이터 손실이나 간섭으로 인한 손상을 checksum으로 검사한다. 프레임을 수신받은 NIC에서 계산한 checksum이 FCS와 일치하지 않으면 손상된 것으로 간주하여 버려진다.

## Internet Layer
가장 활발한 계층; 라우터로 네트워크 간 이동이 발생하기 때문

주 프로토콜은 IPv4 (4바이트, 즉 32비트) 및 IPv6(16=4^2바이트, 즉 128비트). 이전에는 IPv4가 할당할 수 있는 주소 개수로는 충분하였지만, 현재는 인터넷 장치 개수가 많아지며 더 많은 주소를 할당할 수 있는 IPv6 지원되는 라우터로 전환하고 있다.

라우터가 Link Layer의 PDU인 프레임을 열어 패킷을 읽는다. 출발 및 도착 IP 주소, 그리고 SDU(여기서는 Transport Layer의 PDU인 세그먼트 혹은 데이터그램)를 갖는다. 라우터는 이 정보를 통해 목적지까지 패킷을 안내한다. 즉, 네트워크 간 연결에 대한 정보가 위주이다.

> MAC 주소는 NIC에 기입된 주소이기 때문에 순수히 MAC 주소에만 의존하였다면 목적지까지 도달하는 경로에 대한 기록을 주기적으로 업데이트할 필요가 있어 순탄한 인터넷 사용이 불가능할 것.

- 패킷 헤더는 IPv4 헤더와 IPv6 헤더가 있다. 헤더는 IP 버전, 출발 및 도착 IP 주소, Payload 프로토콜 종류, 그리고 TTL(혹은 홉 제한)이 있다.
- [TTL](https://ko.wikipedia.org/wiki/Time_to_live)(Time to live)는 패킷이 라우터를 거치며 도착 주소로 도달하지 못하고 떠돌아다녀 쓸데없이 주파수 대역을 낭비하는 것을 방지하는 목적으로 [홉](https://ko.wikipedia.org/wiki/홉_(네트워크)) 횟수를 제한시킨다. 매번 홉 할때마다 TTL을 차감하고, 0이 되면 패킷은 손실된다.

> 하나의 네트워크 세그먼트에서 다음으로 넘어가는 것; 간단히 라우터를 통과한 횟수라고 볼 수 있다. 출발지를 0으로 보면 0-origin 홉 카운트, 1로 보면 1-origin 홉 카운트라 부른다.


## Transport Layer
(서버나 클라이언트 불문하고) 실제 호스트 장치에서 동작을 하는 계층.

Internet Layer의 패킷을 열어 (사용된 프로토콜에 따라) 세그먼트 혹은 데이터그램을 읽는다.

* TCP 프로토콜: 세그먼트(segment)
    : 연결 중심의 안전성을 보장하는 프로토콜 (신용결제, 웹페이지 로딩, 파일전송 등)

* UDP 프로토콜: 데이터그램(datagram)
    : 속도 중심의 connection-less 프로토콜 (실시간 화상영상, DNS 탐색 등)

출발 및 도착 포트, 그리고 SDU(여기서는 Application Layer의 PDU인 메시지)를 갖는다. 여기서 포트는 장치의 특정 채널을 가리킨다. 각 브라우저 탭을 열때마다 컴퓨터에 새로운 포트를 연다. 각 어플리케이션은 일반적으로 특정 포트 범위에서 실행된다.

즉, 포트 간 연결에 대한 정보가 위주이다. 혹은 IP 주소와 포트 번호는 고유의 소켓을 구성하기 때문에 소켓 간 연결에 대한 정보가 위주라고도 말한다.

수신받은 세그먼트나 데이터그램을 올바른 포트로 전송하는 절차를 역다중화(demultiplexing)이라 부른다. 반대로 모든 포트로부터 세그먼트 및 데이터그램을 거두어 하나로 만드는 것을 다중화(multiplexing)이라고 한다.

### UDP 프로토콜
데이터그램은 출발 및 도착 포트, 데이터그램 길이, 그리고 오류 검증용 checksum이 전부이다. 이는 TCP에도 있는 정보들이다.

### TCP 프로토콜
연결 중심의 TCP 프로토콜은 데이터 교환이 이루어지기 전에 클라이언트와 서버 간 확고한 연결이 반드시 되어야 한다.

- 세그먼트 헤더 안에는 플래그가 TCP Handshake하여 초기 연결을 설립한다. TCP Handshake는 1.5 RTT를 거쳐 세 단계 절차를 통해 이루어진다.
    1. 클라이언트가 payload가 없는 bodyless `SYN` 플래그의 세그먼트를 송신한다.
    2. 수신받은 서버는 bodyless `SYN | ACK` 플래그의 세그먼트로 응답한다.
    3. 클라이언트가 서버 세그먼트를 수신받으면 이에 대한 bodyless `ACK` 플래그 세그먼트로 응답한다.

    이 절차가 끝나면 클라이언트는 실질적이 HTTP 요청을 서버로 송신한다.

- Segmentation은 어플리케이션 PDU인 메시지를 여러 개로 쪼개어 별도의 패킷으로 전송될 수 있도록 한다. 이는 UDP 데이터그램에서 한꺼번에 처리하지 못하는 방대한 양을 처리할 수 있는 것 외에도 in-order delivery가 가능하다. 즉, 메시지의 몇 번째 세그먼트인지 헤더에 있는 `Sequence #`로 분별 가능하며, 이를 수신받으면 `Acknowledgment #`로 응답한다.
    
    송신 측은 응답이 온 `Acknowledgment #`들을 종합하여 세그먼트가 수신 측에 모두 도달하였는지 알 수 있다. 만일 다 도달했으면 TCP Handshake와 동일한 절차이나 `SYN` 대신 `FIN` 플래그를 세워서 진행한다.

- Pipelining은 여러 메시지(ex. 세그먼트)를 한 번에 송신하여 대역을 최대한으로 활용하는 개념이다. 여기서 한 번에 송신될 메시지 개수를 결정하는 게 세그먼트 헤더에 있는 Window size이다. 만일 5라면 5개의 세그먼트가 한 번에 송신된다. 그러면 송신된 5개의 세그먼트에 대한 `ACK`를 받지 않는 이상 다음 5개의 세그먼트를 송신하지 않는다. 충분한 시간이 지났는데 세그먼트에 대한 `ACK`를 수신받지 않았으면 해당 세그먼트를 다시 한 번 송신하여 빠뜨린 세그먼트가 없도록 한다. 만일 이미 수신받은 세그먼트 `ACK`라면 무시된다.

- Flow Control 기능: 세그먼트 수신 측은 헤더에 있는 Window size로부터 얼만큼을 받을 수 있는지 알린다. Flow Control은 이를 기반으로 세그먼트 송신 측은 window size를 조정한다.

- Congestion avoidance: flow control이 송신 측의 window size를 조정하지만 traffic이 얼만큼 빠쁜지는 알 수 없다. 알고리즘으로 `ACK`를 받는데 걸리는 시간을 구하여 traffic congestion 정도를 어림잡아 세그먼트 송신을 그에 따라 조정한다.

## Application Layer
최상층에서는 세그먼트 혹은 데이터그램을 열어 메시지 (일명 데이터)를 읽는다. 메시지 안에는 해당 포트에서 동작하는 어플리케이션 프로세스가 무엇이며 사용된 프로토콜이 무엇이냐에 따라 다양한 내용이 들어있을 수 있다. 프로세스는 전용으로 할당된 포트가 있기 때문에, 포트 간 연결에 대한 정보가 위주이다.

메시지 내용으로써는 HTTP 요청 및 응답, DNS 탐색 및 응답, SMTP 메시지 혹은 TLS record일 수 있다.

### DNS 메시지
인터넷에서의 모든 통신은 목적지 IP 주소가 반드시 필요하다: 브라우저가 특정 도메인 이름의 IP 주소를 찾는 "DNS 탐색 과정"도 마찬가지이다.

헤더에는 두 boolean이 있다.

- `QR`: on = 응답, off = 탐색
- `AA`: on = Authorative 응답, off = non-Authorative 응답 or 탐색
- `Response Code`: 응답 상태

payload 안에는 (1) 탐색하려는 실제 도메인 이름 및 (2) 탐색 record 종류가 들어있다.
* `A`: IPv4를 사용하는 호스트네임
* `AAAA`: IPv6를 사용하는 호스트네임
* `CNAME`: cononical name record 혹은 호스트네임 alias
* `MX`: mail exchanger record
* `NS`: name server record

응답에 대한 payload는 응답 크기와 응답 데이터 (말하자면 IP 주소)를 담는다.

DNS 크기가 작고 속도가 우선이므로 일반적으로 UDP로 통신된다.

### HTTP 요청 메시지
헤더는 다음과 같이 구성된다.

* Request Line (필수)
    : HTTP 메소드(`GET`, `POST`, `PUT`/`PATCH`, `DELETE` 등), `GET` 일 경우 full URL 경로, HTTP 버전

* Headers (선택)
    : Key-value 쌍, 언어, 쿠키 등

TCP에서 이루어짐

### HTTP 응답 메시지
헤더는 다음과 같이 구성된다.

* Status Line (필수)
    : HTTP 버전, 상태 코드, 상태 텍스트; 띄어쓰기로 나뉘어진다.

* Headers (선택)
    : key-value 쌍, 쿠키 등

TCP에서 이루어짐

### TLS record 메시지
Transport Layer Security. Transport와 Application 계층 사이에 있는 또 하나의 계층으로 동작하는 메시지이다.

HTTP 메시지를 encrypt하여 HTTPS를 생성한다 (일명 HTTP/TLS).

헤더는 다음 정보를 갖는다.

* payload의 content type
* TLS 버전
* 크기

Payload 안의 내용은 순차적으로...
1. TLS handshake (TCP handshake 종료 후, 즉 `FIN | ACK` 세그먼트 이후 곧바로 진행)
2. ChangeCiperSpec

    Step 1. 클라이언트가

3. Alert
4. Application Data

푸터
* Message Authentication Code
    : data tampering(비인가된 채널에서 데이터를 망가뜨리는 행위)을 위한 checksum,

TCP에서만 동작한다.
(DTLS라는 UDP 버전의 TCP가 따로 있다.)

## HTTP


# 네트워크: OSI
Open Systems Interconnection(OSI)은 작용하는 내부적 구조 및 기술을 불문하고 통신 시스템의 통신 기능을 특정하고 기준짓는 개념적인 모델이다. 통신 시스템 내에서 데이터의 흐름을 일곱 개의 추상 계층으로 나눈다.

통신 프로토콜은 한 호스트 내의 객체가 또다른 호스트 내의 동일한 계층의 객체와 상호작용하도록 한다. 이들은 프로토콜 데이터 단위(Protocol Data Unit; PDU)를 N 계층 프로토콜을 통해 교환한다.

> PDU는 protocol-specific control 정보(즉 프로토콜 관련 header 또는 footer) 및 payload(실질적인 메시지 데이터)로 구성된다. PDU의 payload를 서비스 데이터 단위(service data unit; SDU)라고 부른다.

두 OSI 호환 장치의 통신에 의한 데이터 처리는 다음 절차를 따른다:

1. 송신될 데이터는 송신 장치의 가장 최상위 계층 (N 계층)에서 PDU로 구성된다.
1. PDU는 N-1 계층으로 전달되며, 이때는 SDU가 된다.
1. N-1 계층에서 SDU는 header, footer, 혹은 두 개 모두가 붙여져 N-1 계층의 PDU가 되어 N-2 계층으로 전달된다.
1. 이를 계속 반복하여 최하위 계층까지 간다.
1. 수신받는 장치에서 최하위에서부터 상위 계층으로 올라가면서 header와 footer가 떨어져나가고, 결국 N 계층에서 데이터가 소모된다.

## Physical Layer
[미디어 계층] 계층 1: 물리적 계층 (PDU: 비트, 심볼)

## Data Link Layer
[미디어 계층] 계층 2: 데이터 링크 (PDU: 프레임)

## Network Layer
[미디어 계층] 계층 3: 네트워크 (PDU: 패킷)

## Transport Layer
[호스트 계층] 계층 4: Transport (PDU: segment, datagram)

## Session Layer
[호스트 계층] 계층 5: 세션 (PDU: 데이터)

## Presentation Layer
[호스트 계층] 계층 6: 프레젠테이션 (PDU: 데이터)

## Application Layer
[호스트 계층] 계층 7: 어플리케이션 (PDU: 데이터)
