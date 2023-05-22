'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "97e38d2fb0d864a36f4b0d6cbccf792f",
"index.html": "5f32b2568691fd99ed2cf87ab19c9a4c",
"/": "5f32b2568691fd99ed2cf87ab19c9a4c",
"main.dart.js": "1886fdee8eb9e1548943572322d916a1",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9fdd46dee11631f6ed4a2779f20c7a8c",
".git/ORIG_HEAD": "886cae0f43f6d4343ed6a7d36d9326f7",
".git/config": "3911b011abef476af147ab064f786a48",
".git/objects/61/194ec1701985b24a5f9bada2f26fa384770771": "bfbffe9930ae5d398b2eed710e993c24",
".git/objects/95/4626388fb63cd324dfd3b60ddb7091b5a0f66a": "e3dcb66b4b8bd3a07f851f03053b9c8c",
".git/objects/66/8f16c9d1a9c4d2df37ced34970471781de693c": "9f5add249ac5d29e41a41f9a96d21f14",
".git/objects/3e/02c5d17171efc190fbe4bd15190227ab2f90c6": "4604987be935479a3a9e4e92990051f6",
".git/objects/3e/cc41767f2df86e872211d3b83670931b011f21": "3cc8e74f1ffbd4459ed045dcf9ce1399",
".git/objects/3b/3db4271ea8ad18f2b29434a0f2afe8dfc22c96": "9d13366175984720eecbba2256c90862",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/c1fb849c4f3969540f8c735909c25ef3875e58": "4cd8077541dab2551a26c2e1341caae3",
".git/objects/3d/b03daea14f3f6cb93c878d26de8647c17bcdbe": "ce1840f519b41bea8c38807c2b82676c",
".git/objects/67/a9fbb64552f6b7c729fedf49d54006924356e1": "cd87a34250bc341af457569c2057d4b3",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/0e/9be6c5bf61135cb84f2e12514a7a243f84e671": "d1ee52f2bd752368e11282ad7cff3c55",
".git/objects/a3/18448a66d11c0fb28aa389291df7ce6bcf5ba6": "2695bf6c9e2eaff689e0c71e1b38b37f",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ad/715e7447334a131693f17c657fa903a0887e03": "c6c741155558668760fdea25a931504d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d0/d6178bdbfdd9c0c1748bd1ea13701b509485e8": "543214e5d404da70b4f3ebb6e9d3d8b3",
".git/objects/d0/2cc474905cc76bef8d5b204141c1e0b19d777e": "d258ea1908c91c2f50c6d7ab1581a68c",
".git/objects/be/c7bbe13a1edea91ebcffe1cb66c186f57d6b76": "0fc99656ebbc10f93db602b5d90fdccf",
".git/objects/a2/12ee43659ff68a2cfb52411fcf5cc5c4e58565": "ad5ca411cf7baf4b589b004f788519fe",
".git/objects/d1/2bde595d35ed1925473ee00eb185e6be989ef7": "1a41f69c0203ce15974c3029daa506a0",
".git/objects/d1/cf4d1afeb806568e32f647f459622dcef2dd9b": "c48497d70cd54e9c0f851da42733cb86",
".git/objects/d6/b49219ddfd3973476ed52a7777b169cb23d244": "4d0a4bd6de791e0e2563658a70174996",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/0ef10654d942b2b6476611ce9db1cd4f4dc069": "ddd661dd0ab85006a3c976799c63110e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/65ec78b74f0cd0af3860ed924ae15917172f0b": "ed816304730a1a6d8a8863e6dd261d82",
".git/objects/e2/92eb8f719d5ddb950f473682d51abf8a6b40cd": "9fb94a94f2048d6c4a1a2af4d6c407f9",
".git/objects/f4/951e415c52162bdfa5f7a93b76b56be77ad11b": "d5986eb6b10a4f8daf6c91295a09186d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/36cb5426e042c455259551eb23c369f50d6e67": "18f81bb1a6322667ce45c0ce99e51d30",
".git/objects/c0/baf636f27aabd612d03b41dd9ad0fe70af5b4d": "202143bb3a25c7a6e4d695863d7dc8a8",
".git/objects/ee/e07914b4ab8c6db75e6ee03c7dfd3c93f4d564": "4f259bcfa83b29bce5eadd1bd2a5d1ce",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f5/0a0aebd67171a9b76fb08de8de7a8d79107c1e": "5e157fcd331b9ed9b5843516f74b726f",
".git/objects/e4/fd20561785dcc12442a5f8ae52f43282c7e626": "70a80caf17f43cb7c70b228d40b350ca",
".git/objects/fe/a2e3f0cc5f20bfca7758cc2b61d7fc2b5e4d27": "4d422d93fe438b1b794bd4a70c48c466",
".git/objects/fe/665c13009fbf4a2d67cd52185fed99cc3a235b": "b9aded68e7b8a160f844bd228841831b",
".git/objects/c1/aebfac08170ca8d8508653fd3ea3236c6ab52a": "69db308eec3a7ef27c42227a7ee45571",
".git/objects/c1/67384614c0056f3589004f20aeeb6e9d1b71ea": "8eae6dc8e7488ff7ae73d76a6e938981",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/18/e21512574c6addf493fe5cf63c026fcc0ce3d0": "a2977eeb11bfc1f692c1b3ef5b309016",
".git/objects/7d/14afc8bc5c1f38b147a0eb07304007a9e95acf": "3950e6f2ae19086b9ec7d2106019c10b",
".git/objects/7d/db12ee3570f767384f0930d9fcd26923d2e947": "7ecdef7304f4c78b08c71efb95d3b1fa",
".git/objects/29/25d0663f8ea1e53f4d8e97a3c9825d557295d0": "f80007422685f21acd65b9e296fd300b",
".git/objects/16/274b5aa567757bcd27f07a720787105b3f6783": "91fed425359f3ff1e1ab8b9241ebf33b",
".git/objects/89/083f7e5d0ba8808fd6b7b67b82c39ab6f49b89": "5bfca716e83a0dc829656ce607e19606",
".git/objects/1f/d79f4c0a92c9d017da0c66bf512615d6fb2320": "2825c4986899bd779d5913ac624f497c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/9f6eb8430cd7ebc31e49ef398a67627142884d": "f1cefc32101ce38096b1580ba635599f",
".git/objects/87/691764833bdc728854f6ec982b309843333b57": "159f4681494f27478fe5ed031079e2f1",
".git/objects/74/9e076f6369afb796ce1cb645f6baa3a1dd338b": "bd1f6fb15967d617c297a77bf325f132",
".git/objects/28/eec2ee7fae583692795b5d1311ef8e38cff75c": "b3722e75afa800c579dd5f7769204133",
".git/objects/7b/0765911c4c1f152000c4776d1ffbf2e5becc92": "ae75f8b6759bac51d8e7c6496d78e63e",
".git/objects/8a/108a40f2b50c38890aa8d3511fb8e5802bd920": "79a67650c983f2aac532817b62138378",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/16c4e58b7fd3fc5fbf8f3fc4620cb93851d2df": "fdac2c996b17a88e8fd3ecd9691bbd2b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/fbbb06e54221871c059fe385143533988f44d0": "9eb23b18400110c06a0a17e781f5a01e",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/8920f9df26bf3ccd8c9183a4197595ffbbbe50": "c12c30e7db3a7940b2e5f345993721e5",
".git/objects/75/df4e08fe4997d1883a59b54e588b32a362fbb5": "4cfeeb8b67e26bd68d80a2d0a2df62c3",
".git/objects/81/adc246ab72a0774a8f982c1d347cfd229a3459": "377598a89ab438b7c9626f49b05650a6",
".git/objects/72/cb26ec001b01e770e8d79ed86f06697bd6418a": "beda93f2c17525ce4efc6532488f8452",
".git/objects/2f/92d972635f44ac296a7cee97c43e70ad2df9ec": "1dad8ddafb8c8e651e72460501b07f1f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/6eee6d69bfdb933baf342024ad7c136bab7c78": "0aed0381621093d73f709907246930ee",
".git/objects/38/98cbca7ee5cd771fbca931a59d4fe442468f00": "e2ef18daeaff24227d32aa5f6da974d8",
".git/objects/6e/86672130aac0e4918a028246f39139ae5a99c5": "813698a68796f8a6da80a0ef5df505a1",
".git/objects/09/a92c9b8832798b39a5e780b2bf54752c8cc153": "4b773cab85f76e8d2c17490d2d6913ab",
".git/objects/5d/52f9e35f7be9db269ce59c85074966f60fa3cc": "dc73df7cf2288035a4e93fe366d15cab",
".git/objects/31/7c916b858a55b52e35e1337cc52cee4c146877": "2e62dccc7b2e9fb46446455d2c5ea202",
".git/objects/91/670a7f1c33a7b6f4487be3fd09c4a339cbceb5": "d0927846504b722494e42a52c0c083b5",
".git/objects/62/8500efc5de0b36af31baf6db59079cb8ed9f2f": "a79f841704e15dcc4661fa3e2af95c66",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3f/02b3b361c2ba779905caa722e525787f34e523": "e51b254d545da6c13be1cd7ae0c0bf58",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/06/32d3aacb9e3227926044a5af4c7b327cb5ad3e": "0090f2734351caa4f8b97586d5707993",
".git/objects/6c/fd6dd054ecfed5ebdc264dcf45babc49bf9b0a": "2335b0145e38c222f2cdc0bb1c7547c8",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/64/20a2b27635839bf23e5b3b398aa43367e45391": "86422555f743b04a42a1afd666c74fbd",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/01cd62b269bc51cd712e6a6d0fc0ed568a556b": "838908540d4ce0225720dedf32f265f6",
".git/objects/a7/7c5a0f950a41ec1f10c0ce445d2f96d05a3ff3": "e45d24f8d7308426b6e80c695e6a1521",
".git/objects/b1/2c2d0aecfc514dfdaf9bae1d96166da40bd775": "ac83d5c7ef76a8642d72f9c6be445c4a",
".git/objects/dd/75fcd13c776a6e27cd23b61ff1e231287bca38": "c10102c39fe7f0d0c9d4c6f65e27a014",
".git/objects/dc/0f4474f80177091bdb3d1eb4916087248e62ac": "cb0dcf7241914fa58c7fa36199679548",
".git/objects/a9/77731303412e6f5dd70d649e4564dd96e665cf": "92f5bcb3702b142cd66818182a877e92",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/4313c089ddf1ecae4ed4f3c0bfc81cfd2b1001": "3d2c9052af510c243f8bb8ea96228b63",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/78902dc70459c2f4bb2f096320457019b20322": "c5363b7a1ee8445e66dab3e28b219278",
".git/objects/de/a6208029620c84c5c1bf601b9e879613d4040f": "e394a4366273900ddb5737507188fc55",
".git/objects/de/224b6cfc23f02a64f1e70e8faf2b04d5c332c4": "36a2014ad7ee27e57cee5b7fe5666445",
".git/objects/b0/10eccc2d2a1fd17213a70e0d437afb4d7f97d9": "f80c6a4f19e4aa5fdeef41191b82b5ae",
".git/objects/b0/9f5dcb77218a40fa309120626ba3be115579af": "b5824c06325805202556e3810ddf86eb",
".git/objects/a6/5c731ef78075e1d98a82b8dc0a7a00e57189e5": "44275d09b96ab2d82bf2a0f53b9814f2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/f0/7b5915792eb8d108d3d00acb5470f8798413dc": "0929c492cd2a922fae055dacc16ba389",
".git/objects/fa/d25d79dfbecc2c62e1986388581fdca3a95a7c": "eab187b74cc35f4c8e6a4e4a3688652a",
".git/objects/c5/6385a87d4a86bbcb493dc96982c8c8157665d4": "f7c7650f0b4e23ea777183ef37bd10cd",
".git/objects/f1/d48dc073caac4efe31585b39b023aab6283d23": "1d48241c192e36f6fb29693b9336d1ba",
".git/objects/e7/8579f13b88a9e66bbc2e20438842e78b9e9fcd": "8049afdab51789019f4acd5931a8a254",
".git/objects/e7/1809e9a295583c2766364d675d988b2bbb311b": "cb97df2b2e22f52f343ee674c6691211",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/705a0b2541c2fd53ab1db8da85f8e6c55017cd": "09460b63e06d7dd31b7a2edd79c40bc7",
".git/objects/e0/665908f68d0cb566a34c258dc355268c9327ad": "9fff331369ae2a948ff8c4cb96233596",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/f3c99cb7d573b6d912966002d15b8482a0a3c7": "1577dfd8a62530f9206766cab9643e7f",
".git/objects/79/4e6eef93fefa399996f964a1b845bb5f1461cd": "4571b44c08d51144f89d5cb560d20a49",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/31c05e1f92f7aa3c56c5f7d0230217d17f83bc": "ee3252d3c00a928ffde8ced8c2f206fc",
".git/objects/2d/5b6d75d1c54b4f49119fa74e4ebb638ba28a8d": "1221e0807a9d4340fe73cf524f0962dd",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/a151eefc94921669c2857fa5eb040643bb5d96": "a80fbc38ffa6647debe5c3ee5ae6ac48",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/b947d9ea0b65ba2a31ace289a5567238c1f029": "492446bfbd143549277e7cd7da1ff23a",
".git/objects/48/bae00343346cc1a6ec6f40d0ae68c80ced28f0": "23b703df5faa0ab7152ae6f9e663ac21",
".git/objects/70/2c5bc7961d3f7ec8fbb961c9a7ba3236682775": "35aff80323ff241efe3232f98736b39e",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/24/fcfb69125bba79e2b25de2493d86f193e653ae": "4564230f4be385af79b6b495808407e6",
".git/objects/4f/30c710c25e2fac41cbd984b1513bce37ca28be": "46dda6cf54ecbcb6fbae7e4b184d8127",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/b2b6d03ab6866e271c80a2ae292111cb4f33f1": "c60c7b383e4db39887b04bd3f76c205a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/49/3101b38ac89e95bacd9368803450da5c646fa9": "cff369e167746740aab4ebf96f1dac13",
".git/objects/2e/e7c408b84bac02cdf9f8eeb76493cc49c171c8": "2ea6e0cd725115acf5033310cb92b50b",
".git/objects/47/7e4a5a3a53646512d040ba28fba60c267ea889": "28b29b5891ef0deefa3e12618d31f8d8",
".git/objects/78/0939b20c1c9345898c05bb1ab20c14bfe5704b": "95565ec0d7d2c6be893ec958e604ee57",
".git/objects/8b/4e1d3de55550996d687dd0f2d501308adc743c": "fd467fb329d4514b51b9b0b3792a40ef",
".git/objects/8b/0c5ffc1a9c5d80d55300f5a3541c3085c323b1": "51c5963dbad477813b6f33bede72b23f",
".git/objects/13/806a9a5bc6906725ad77383fc6fcd434044453": "46f9ffec7d3390d0e14df7cda9e1b5eb",
".git/objects/7f/29a7bb99f850e7529915c1a89427a125ca216a": "3d7f14cfed29f5cbd49e95dbaeb75609",
".git/objects/7f/29c624722cffdeee12619b42074d64513a1d2e": "4edb828201bbdeb9574bdf49f4ecf6d2",
".git/objects/7a/a8c509db4f878ee5f8d7d863a46cd3d58589a1": "16d4f79e08b4e7b40622fff716ae8e5b",
".git/objects/8e/d2b6a6b5c6cf4e362320d998878d4d983ac2fe": "f6afae920f5bb4dfecbe89b08992b456",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/25/3e007ea19e0e3f5ee225272689e750d42df0ee": "aaf9cb4c81e3d9db7a705bf5572135bd",
".git/objects/25/2159b37aadc3fbc7cccf91f4050f08a98ad0dc": "60bc7a654f3b3110084a3ee10c1e1074",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a4c9c4ce720597b3a162e421cbaf8454",
".git/logs/refs/heads/master": "b704125c023251635715e0392b619144",
".git/logs/refs/remotes/origin/master": "de99ddebbb3e77aa1d2d389597e28841",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "ecc904e23942c86e390dc0f0986b7ae2",
".git/refs/remotes/origin/master": "ecc904e23942c86e390dc0f0986b7ae2",
".git/index": "80491ef88be9e81f67ad5b0f4b324b8e",
".git/COMMIT_EDITMSG": "44de2095385821c99ab503649ffafd9a",
".git/FETCH_HEAD": "6e37c93b999ceb970c34ac0f9f8a4237",
".git/sourcetreeconfig": "1581cd02ed7834accaab1007008ea7e8",
"assets/AssetManifest.json": "7cb8a5ac3eb55ed5b885bbb7adb7f53e",
"assets/NOTICES": "9bed949592b259636632ca937e55b800",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/background/landscape.jpg": "202ac480122b60936bf7423fe540136b",
"assets/assets/background/main.png": "20eca4a50f33c11f210ecd4305b52d9e",
"assets/assets/background/portrait.jpg": "ebf2cadaaf18d51b7d2ad030475e7e11",
"assets/assets/logo/logo.png": "710af568800bf03984ae373d7ec1512b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "ea18cefc2765432e54b1650e0b976260",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "7ffe1d213cb7f189bb46f7c81ed224eb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
